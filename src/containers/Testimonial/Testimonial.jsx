import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './testimonial.scss';
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';
    client.fetch(brandsQuery).then((data) => setBrands(data));
    client.fetch(testimonialsQuery).then((data) => setTestimonials(data));
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className='testimonial__item app__flex'>
            <img src={urlFor(currentTestimonial.imgurl)} alt='testimonial' />
            <div className='testimonial__content'>
              <p className='p-text'>{currentTestimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{currentTestimonial.name}</h4>
                <h5 className='p-text'>{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>
          <div className='testimonial__btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className='testimonial__brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Testimonial, 'testimonial'),
  'testimonial',
  'app__primarybg'
);
