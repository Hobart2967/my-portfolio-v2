import { CompanyInfo } from './company-info.interface';

export interface CareerStation {
  companies: string[] | CompanyInfo[];
  job: string;
  description?: string;
  css?: string;
  school?: boolean;
  companyLogo: string;
  start: {
    month: number;
    year: number;
  };

  end: {
    month: number;
    year: number;
  }
}