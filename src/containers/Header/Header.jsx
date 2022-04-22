import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='app__flex header'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='header__info'
      >
        <div className='header__badge'>
          <div className='app__flex header__badge-cmp'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Flavio</h1>
            </div>
          </div>
          <div className='app__flex header__tag-cmp'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='header__img'
      >
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='header__overlay-circle'
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='header__circles'
      >
        {[images.react, images.sass, images.redux].map((item, index) => (
          <div className='header__circle-cmp app__flex' key={`circle-${index}`}>
            <img src={item} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
