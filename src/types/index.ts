export interface Opportunity {
  id: string;
  name: string;
  expectedReturn?: number | null;
  duration?: number | null;
  minInvestment?: number | null;
  description?: string | null;
  riskLevel?: 'low' | 'medium' | 'high';
  risk?: string | null;
  overview?: string;
  amount?: number;
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