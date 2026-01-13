export interface Opportunity {
  id: string;
  name: string;
  expectedReturn: string;
  duration: string;
  minInvestment: string;
  description?: string;
  riskLevel?: 'low' | 'medium' | 'high';
  risk?: string;
  overview?: string;
  amount?: string;
  date?: string;
  type?: string;
}

export interface Balance {
  available: number;
  invested: number;
}



export type TransactionType = 'DEPOSIT' | 'INVEST';

export interface Transaction {
  id: string;
  opportunityId?: string;
  type?: TransactionType;
  amount?: number;
  date?: string;
}