import { createContext, useReducer } from "react";

export const flags = [
  "joinDiscord",
  "previewSkeletons",
  "showCategoryCounts",
  "showCategorySlugs",
  "showMetadataTools",
  "simulatePostMerge",
  "useWebSockets",
] as const;
export type Flag = typeof flags[number];

export type FeatureFlags = Record<Flag, boolean>;

export const defaults: FeatureFlags = {
  joinDiscord: false,
  previewSkeletons: false,
  showCategoryCounts: false,
  showCategorySlugs: false,
  showMetadataTools: false,
  simulatePostMerge: false,
  useWebSockets: false,
};

export const displayFlagMap: Record<Flag, string> = {
  joinDiscord: "join discord",
  previewSkeletons: "preview skeletons",
  showCategoryCounts: "show category counts",
  showCategorySlugs: "show category slugs",
  showMetadataTools: "show metadata tools",
  simulatePostMerge: "simulate post-merge",
  useWebSockets: "use websockets",
};

const reducer = (
  state: FeatureFlags,
  action: { flag: Flag; enabled: boolean },
) => ({ ...state, [action.flag]: action.enabled });

export const useFeatureFlags = () => {
  const [featureFlags, setFlag] = useReducer(reducer, defaults);
  return { featureFlags, setFlag };
};

export const FeatureFlagsContext = createContext(defaults);
