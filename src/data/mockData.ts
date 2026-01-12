import { Opportunity, Transaction } from '../types';

export const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    name: 'Real Estate Fund A',
    expectedReturn: 12,
    duration: 24,
    minInvestment: 1000,
    description: 'Diversified real estate portfolio focusing on commercial properties',
    riskLevel: 'medium',
  },
  {
    id: '2',
    name: 'Tech Startup Portfolio',
    expectedReturn: 18,
    duration: 36,
    minInvestment: 5000,
    description: 'High-growth technology startups in AI and SaaS sectors',
    riskLevel: 'high',
  },
  {
    id: '3',
    name: 'Green Energy Fund',
    expectedReturn: 10,
    duration: 18,
    minInvestment: 2000,
    description: 'Sustainable energy projects with stable returns',
    riskLevel: 'low',
  },
  {
    id: '4',
    name: 'Healthcare Innovation',
    expectedReturn: 15,
    duration: 30,
    minInvestment: 3000,
    description: 'Medical technology and healthcare services investments',
    riskLevel: 'medium',
  },
  {
    id: '5',
    name: 'E-commerce Growth Fund',
    expectedReturn: 14,
    duration: 24,
    minInvestment: 1500,
    description: 'Regional e-commerce platforms and logistics companies',
    riskLevel: 'medium',
  },
];

export const mockBalance = {
  available: 8500.0,
  invested: 12450.0,
};


export const transactionsMock: Transaction[] = [
  {
    id: '1',
    type: 'DEPOSIT',
    amount: 1500,
    date: 'Jan 5, 2026',
  },
  {
    id: '2',
    type: 'INVEST',
    amount: 500,
    date: 'Jan 10, 2026',
  },
  {
    id: '3',
    type: 'DEPOSIT',
    amount: 2200,
    date: 'Jan 15, 2026',
  },
  {
    id: '4',
    type: 'INVEST',
    amount: 1200,
    date: 'Jan 18, 2026',
  },
  {
    id: '5',
    type: 'INVEST',
    amount: 750,
    date: 'Jan 21, 2026',
  },
  {
    id: '6',
    type: 'DEPOSIT',
    amount: 3000,
    date: 'Jan 25, 2026',
  },
];
