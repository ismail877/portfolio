// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section className='skills'>
      <h2>Skills</h2>
      <ul style={styles.list}>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Java</li>
        <li>Git & GitHub</li>
        <li>RESTful APIs</li>
        <li>Cloud Computing (AWS, Azure)</li>
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
};

export default Skills;
