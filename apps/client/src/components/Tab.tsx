import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

export interface TabProps {
  tab: {
    name: string;
    icon: string;
  };
  handleClick: () => void;
  isFilterTab?: boolean;
  isActiveTab?: boolean;
}
export const Tab: React.FC<TabProps> = (props) => {
  const { tab, handleClick, isFilterTab, isActiveTab } = props;

  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };

  return (
    <div
      key={tab.name}
      onClick={handleClick}
      style={activeStyles}
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'
      }`}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'
        }`}
      />
    </div>
  );
};
