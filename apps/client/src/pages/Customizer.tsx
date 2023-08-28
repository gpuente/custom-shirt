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
import {
  EditorTabs,
  FilterTabs,
  DecalTypes,
  DecalTypeKey,
} from '../config/constants';

type TabName = 'logoShirt' | 'stylishShirt';

export const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState<File>();
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />;
      case 'filepicker':
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case 'aipicker':
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleDecals = (type: DecalTypeKey, result: string) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty as 'logoDecal' | 'fullDecal'] = result;

    if (!activeFilterTab[decalType.filterTab as TabName]) {
      handleActiveFilterTab(decalType.filterTab as TabName);
    }
  };

  const handleActiveFilterTab = (tabName: TabName) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }

    // after setting the active tab, activeFilterTab will be updated
    setActiveFilterTab((prev) => ({
      ...prev,
      [tabName]: !prev[tabName],
    }));
  };

  const readFile = (type: DecalTypeKey) => {
    if (file) {
      reader(file).then((result) => {
        handleDecals(type, result as string);
        setActiveEditorTab('');
      });
    }
  };

  const handleSubmit = async (type: DecalTypeKey) => {
    if (!prompt) return alert('Please enter a prompt');

    try {
      // call backend api
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab('');
    }
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
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
                isActiveTab={activeFilterTab[tab.name as TabName]}
                handleClick={() => handleActiveFilterTab(tab.name as TabName)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
