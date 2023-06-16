import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  candidate_id: string;
  company_id: string;
  position: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  candidate_id?: string;
  company_id?: string;
  position?: string;
  status?: string;
}
