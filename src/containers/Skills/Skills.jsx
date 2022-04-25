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
        <motion.div className='skills__exp'>
          {experiences.map((experience) => (
            <motion.div key={experience.year} className='skills__exp-item'>
              <div className='skills__exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='skills__exp-works'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='skills__exp-work'
                      key={work.name}
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, 'skills');
