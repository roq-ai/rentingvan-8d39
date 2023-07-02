import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { vanValidationSchema } from 'validationSchema/vans';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.van
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getVanById();
    case 'PUT':
      return updateVanById();
    case 'DELETE':
      return deleteVanById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getVanById() {
    const data = await prisma.van.findFirst(convertQueryToPrismaUtil(req.query, 'van'));
    return res.status(200).json(data);
  }

  async function updateVanById() {
    await vanValidationSchema.validate(req.body);
    const data = await prisma.van.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteVanById() {
    const data = await prisma.van.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
