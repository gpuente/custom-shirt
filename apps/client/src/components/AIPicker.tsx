import React from 'react';

import { CustomButton } from './CustomButton';
import { DecalTypeKey } from '../config/constants';

export interface AIPickerProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: DecalTypeKey) => void;
}

export const AIPicker: React.FC<AIPickerProps> = ({
  prompt,
  setPrompt,
  handleSubmit,
  generatingImg,
}) => (
  <div className="aipicker-container">
    <textarea
      rows={5}
      value={prompt}
      placeholder="Ask AI..."
      className="aipicker-textarea"
      onChange={(e) => setPrompt(e.target.value)}
    />
    <div className="flex flex-wrap gap-3">
      {generatingImg ? (
        <CustomButton
          type="outlined"
          title="AI is thinking..."
          customStyles="text-xs"
        />
      ) : (
        <>
          <CustomButton
            type="outlined"
            title="AI Logo"
            customStyles="text-xs"
            handleClick={() => handleSubmit('logo')}
          />
          <CustomButton
            type="filled"
            title="AI Full"
            customStyles="text-xs"
            handleClick={() => handleSubmit('full')}
          />
        </>
      )}
    </div>
  </div>
);
