import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import React, { useEffect } from 'react';


import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    const timer = setTimeout(() => {
      state.intro = false;
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
         

          <motion.div className="home-content" {...headContainerAnimation}>
           
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
             

              <CustomButton 
                type="filled"
                title="Blouse / Shirt !"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
