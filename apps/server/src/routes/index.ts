import { healthcheckRouter } from './healthcheck';
import { generateImageRouter } from './generate-image';

const API_PATH = '/api';
const API_VERSION = 'v1';
const HEALTH_CHECK_PATH = '/health-check';
const API_PREFIX = `${API_PATH}/${API_VERSION}`;
const GENERATE_IMAGE_PATH = `${API_PREFIX}/generate-image`;

export const routes = [
  {
    path: GENERATE_IMAGE_PATH,
    router: generateImageRouter,
  },
  {
    path: HEALTH_CHECK_PATH,
    router: healthcheckRouter,
  },
];
