import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './about.scss';
import { urlFor, client } from '../../client';
import { AppWrapper, MotionWrapper } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I know that <span>Good Apps</span> means <span> Good Business</span>
      </h2>
      <div className='about__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='about__profile'
            key={`${about.title}${index}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(About, 'about'),
  'about',
  'app__whitebg'
);
