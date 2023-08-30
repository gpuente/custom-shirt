import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import state from '../store';
import { CustomButton } from '../components';
import {
  slideAnimation,
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
} from '../config/motion';

export const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <div className="flex flex-row gap-4">
              <img
                src="./threejs.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
              <a
                href="https://www.linkedin.com/in/guillermo-puente-66125b54/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-8 h-8 transform transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/gpuente/custom-shirt" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-8 h-8 transform transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://gpuente.me" target="_blank">
                <FontAwesomeIcon
                  icon={faLink}
                  className="w-8 h-8 transform transition duration-300 hover:scale-125"
                />
              </a>
            </div>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{' '}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
