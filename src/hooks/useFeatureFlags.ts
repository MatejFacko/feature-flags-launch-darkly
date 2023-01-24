import { useFlags } from 'launchdarkly-react-client-sdk';

interface FeatureFlags {
  firstFlag: boolean;
}

export const useFeatureFlags = (): FeatureFlags => {
  const flags = useFlags<FeatureFlags>();
  // eslint-disable-next-line no-console
  console.log(flags);

  return flags;
};
