import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VacationRequestInterface {
  id?: string;
  employee_id: string;
  start_date: any;
  end_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VacationRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  status?: string;
}
