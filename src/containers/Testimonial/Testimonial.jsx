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

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';
    client.fetch(brandsQuery).then((data) => setBrands(data));
    client.fetch(testimonialsQuery).then((data) => setTestimonials(data));
  }, []);
  return <div>Testimonial</div>;
};

export default AppWrapper(
  MotionWrapper(Testimonial, 'testimonials'),
  'testimonials',
  'app__primarybg'
);
