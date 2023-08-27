import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

export type ButtonType = 'filled' | 'outlined';

const generateStyle = (bg: string, type?: ButtonType) => {
  const defaultStyle = {
    backgroundColor: bg,
    color: '#fff',
  };

  switch (type) {
    case 'filled':
      return defaultStyle;
    case 'outlined':
      return {};
    default:
      return defaultStyle;
  }
};

export interface CustomButtonProps {
  type?: ButtonType;
  title: string;
  handleClick: () => void;
  customStyles?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { type, title, handleClick, customStyles } = props;

  const snap = useSnapshot(state);

  return (
    <button
      onClick={handleClick}
      style={generateStyle(snap.color, type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    >
      {title}
    </button>
  );
};
