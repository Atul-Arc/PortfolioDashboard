interface AppEnv {
  mockApiLabel: string;
  defaultCurrency: string;
}

const env = import.meta.env;

export const appEnv: AppEnv = {
  mockApiLabel: env.VITE_MOCK_API_LABEL ?? 'Enterprise Mock Data',
  defaultCurrency: env.VITE_DEFAULT_CURRENCY ?? 'USD',
};
