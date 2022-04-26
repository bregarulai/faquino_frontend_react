import React, { useState } from 'react';

import './footer.scss';
import { images } from '../../constants';
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };
    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSubmited(true);
    });
  };
  return (
    <>
      <h2 className='head-text'>Take a coffe and chat with me</h2>
      <div className='footer__cards'>
        <div className='footer__card'>
          <img src={images.email} alt='email' />
          <a href='mailto:hello@flavio.com' className='p-text'>
            Email me
          </a>
        </div>
      </div>

      {!isFormSubmited ? (
        <div className='footer__form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name='message'
              className='p-text'
              placeholder='Your Message'
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Footer, 'footer'),
  'contact',
  'app__whitebg'
);
