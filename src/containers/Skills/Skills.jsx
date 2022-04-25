import React, { useState, useEffect } from 'react';
import ReactToolTip from 'react-tooltip';
import { motion } from 'framer-motion';

import './skills.scss';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experincesQuery = '*[_type == "experiences"]';
    client.fetch(skillsQuery).then((data) => setSkills(data));
    client.fetch(experincesQuery).then((data) => setExperiences(data));
  }, []);
  return (
    <>
      <h2 className='head-text'>Skills and Experience</h2>
      <div className='skills__container'>
        <motion.div className='skills__list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='skills__item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.icon} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, 'skills');
