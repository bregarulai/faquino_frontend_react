import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';

import './skills.scss';
import { AppWrapper, MotionWrapper } from '../../wrapper';
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
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='skills__item app__flex'
              key={skill.name + index}
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
        <div className='skills__exp'>
          {experiences.map((experience, index) => (
            <div key={experience.year + index} className='skills__exp-item'>
              <div className='skills__exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              {experience.works.map((work, index) => (
                <motion.div
                  className='skills__exp-works'
                  key={work.name + index}
                >
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='skills__exp-work'
                    data-tip
                    data-for={work.name}
                  >
                    <h4 className='bold-text'>{work.name}</h4>
                    <p className='p-text'>{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {work.desc}
                  </ReactTooltip>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Skills, 'skills'),
  'skills',
  'app__whitebg'
);
