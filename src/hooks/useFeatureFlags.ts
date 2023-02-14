import { useFlags } from 'launchdarkly-react-client-sdk';

interface FeatureFlags {
  firstFlag: boolean;
  soundsSettings: boolean;
  rating: boolean;
  dataGrid: boolean;
  tableColumnFilters: boolean;
  tableColumnSort: boolean;
}

export const useFeatureFlags = (): FeatureFlags => {
  const flags = useFlags<FeatureFlags>();

  return flags;
};
