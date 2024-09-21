// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <ul style={styles.projectList}>
        <li>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
            Project 1: MERN Stack App
          </a>
          <p>Description of project 1.</p>
        </li>
        <li>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
            Project 2: Java API Backend
          </a>
          <p>Description of project 2.</p>
        </li>
        <li>
          <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">
            Project 3: React Portfolio
          </a>
          <p>Description of project 3.</p>
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
  projectList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    color: '#666',
  },
  projectItem: {
    marginBottom: '15px',
  },
};

export default Projects;
