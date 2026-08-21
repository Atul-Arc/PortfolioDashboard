import type {
  AssetAllocationEntry,
  Holding,
  PortfolioTrendPoint,
  RiskProfile,
} from '../domain/entities';

export type LoadState = 'idle' | 'loading' | 'ready' | 'error';

export interface PortfolioState {
  loadState: LoadState;
  errorMessage: string;
  asOfDate: string;
  holdings: Holding[];
  allocation: AssetAllocationEntry[];
  trend: PortfolioTrendPoint[];
  riskProfile: RiskProfile | null;
}

export type PortfolioAction =
  | { type: 'load_start' }
  | {
      type: 'load_success';
      payload: {
        asOfDate: string;
        holdings: Holding[];
        allocation: AssetAllocationEntry[];
        trend: PortfolioTrendPoint[];
        riskProfile: RiskProfile;
      };
    }
  | { type: 'load_error'; payload: string };

export const initialPortfolioState: PortfolioState = {
  loadState: 'idle',
  errorMessage: '',
  asOfDate: '',
  holdings: [],
  allocation: [],
  trend: [],
  riskProfile: null,
};

export function portfolioReducer(
  state: PortfolioState,
  action: PortfolioAction,
): PortfolioState {
  switch (action.type) {
    case 'load_start':
      return {
        ...state,
        loadState: 'loading',
        errorMessage: '',
      };
    case 'load_success':
      return {
        ...state,
        loadState: 'ready',
        errorMessage: '',
        ...action.payload,
      };
    case 'load_error':
      return {
        ...state,
        loadState: 'error',
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
