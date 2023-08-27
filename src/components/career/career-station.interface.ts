export interface CareerStation {
  companyName: string;
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