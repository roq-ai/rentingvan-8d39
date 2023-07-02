import { BookingInterface } from 'interfaces/booking';
import { MaintenanceInterface } from 'interfaces/maintenance';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VanInterface {
  id?: string;
  name: string;
  price_per_day: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  maintenance?: MaintenanceInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
    maintenance?: number;
  };
}

export interface VanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
