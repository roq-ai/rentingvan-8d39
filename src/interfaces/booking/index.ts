import { UserInterface } from 'interfaces/user';
import { VanInterface } from 'interfaces/van';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_date: any;
  end_date: any;
  user_id?: string;
  van_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  van?: VanInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  van_id?: string;
}
