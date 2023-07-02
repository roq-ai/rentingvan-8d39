import * as yup from 'yup';

export const vanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price_per_day: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
