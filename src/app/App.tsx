import { DashboardPage } from './routes/DashboardPage';
import { PortfolioProvider } from '../state/portfolio-context';

export default function App() {
  return (
    <PortfolioProvider>
      <DashboardPage />
    </PortfolioProvider>
  );
}
