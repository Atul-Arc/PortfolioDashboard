import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type PropsWithChildren,
} from 'react';
import { mapAllocation, mapHoldings, mapRiskProfile, mapTrend } from '../services/mappers/portfolio-mappers';
import { portfolioMockApi } from '../services/api/portfolio-mock-api';
import {
  initialPortfolioState,
  portfolioReducer,
  type PortfolioState,
} from './portfolio-reducer';

interface PortfolioContextValue {
  state: PortfolioState;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(portfolioReducer, initialPortfolioState);

  const refresh = useCallback(async () => {
    dispatch({ type: 'load_start' });

    try {
      const [holdingsResponse, allocationResponse, trendResponse, riskResponse] =
        await Promise.all([
          portfolioMockApi.getHoldings(),
          portfolioMockApi.getAllocation(),
          portfolioMockApi.getTrend(),
          portfolioMockApi.getRiskProfile(),
        ]);

      dispatch({
        type: 'load_success',
        payload: {
          asOfDate: holdingsResponse.asOfDate,
          holdings: mapHoldings(holdingsResponse),
          allocation: mapAllocation(allocationResponse),
          trend: mapTrend(trendResponse),
          riskProfile: mapRiskProfile(riskResponse),
        },
      });
    } catch {
      dispatch({
        type: 'load_error',
        payload: 'Unable to load portfolio data from enterprise mock services.',
      });
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo(
    () => ({
      state,
      refresh,
    }),
    [state, refresh],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export { PortfolioContext };
