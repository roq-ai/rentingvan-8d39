import { VanInterface } from 'interfaces/van';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceInterface {
  id?: string;
  start_date: any;
  end_date: any;
  van_id?: string;
  created_at?: any;
  updated_at?: any;

  van?: VanInterface;
  _count?: {};
}

export interface MaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  van_id?: string;
}
