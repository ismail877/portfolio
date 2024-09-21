// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to contact me through any of the following platforms:</p>
      <ul style={styles.list}>
        <li>Email: <a href="mailto:ismailrahman2508@gmail.com">ismailrahman2508@gmail.com</a></li>
        <li>Phone: +91-8770776267</li>
        <li>
          GitHub: <a href="https://github.com/ismail877" target="_blank" rel="noopener noreferrer">github.com/Ismail</a>
        </li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/md-ismail-rahman-25aug1997/" target="_blank" rel="noopener noreferrer">linkedin.com/in/Ismail</a>
        </li>
      </ul>
      </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    color: '#666',
  },
  link: {
    color: '#0000EE',
    textDecoration: 'none',
  },
};

export default Contact;
