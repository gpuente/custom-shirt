import {
  aiIcon,
  fileIcon,
  swatchIcon,
  logoShirtIcon,
  stylishShirtIcon,
} from '../assets';

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatchIcon,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  {
    name: 'aipicker',
    icon: aiIcon,
  },
];

export const FilterTabs = [
  {
    name: 'logoShirt',
    icon: logoShirtIcon,
  },
  {
    name: 'stylishShirt',
    icon: stylishShirtIcon,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
};
