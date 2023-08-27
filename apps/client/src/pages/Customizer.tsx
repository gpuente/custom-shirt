import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { AnimatePresence, motion } from 'framer-motion';

import state from '../store';
import config from '../config/config';
import { downloadIcon } from '../assets';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { downloadCanvasToImage, reader } from '../config/helpers';
import {
  AIPicker,
  ColorPicker,
  FilePicker,
  Tab,
  CustomButton,
} from '../components';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';

export const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolite top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...slideAnimation('down')}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
