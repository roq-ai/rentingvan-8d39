const mapping: Record<string, string> = {
  bookings: 'booking',
  maintenances: 'maintenance',
  organizations: 'organization',
  users: 'user',
  vans: 'van',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
