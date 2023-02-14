import { useFlags } from 'launchdarkly-react-client-sdk';

interface FeatureFlags {
  firstFlag: boolean;
  soundsSettings: boolean;
  rating: boolean;
  dataGrid: boolean;
}

export const useFeatureFlags = (): FeatureFlags => {
  const flags = useFlags<FeatureFlags>();

  return flags;
};
