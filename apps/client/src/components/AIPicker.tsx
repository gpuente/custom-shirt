import React from 'react';
import { DecalTypeKey } from '../config/constants';

export interface AIPickerProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: DecalTypeKey) => void;
}

export const AIPicker: React.FC<AIPickerProps> = () => <div>AIPicker</div>;
