import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import ProjectCard from './Card';

const projects = [
    {
      id: 1,
      title: 'IntelliStock',
      description: 'Intellistock is a full-stack web application built with Vite and React, designed for efficient inventory tracking. It provides a user-friendly interface for managing and monitoring your inventory, helping businesses keep track of stock levels, sales, and restocking needs.',
      imageUrl: 'url-to-image-1.jpg',
      deployLink: 'https://provardjake.github.io/Audible-Atmosphere/',
      githubLink: 'https://github.com/akidd15/IntelliStock',
    },
    {
      id: 2,
      title: 'Audible Atmosphere',
      description: 'This application will allow the User to enter in a zip code and it will display the current weather and generate a randomized playlist of 10 songs based on the weather conditions in that location. The user can then save the playlist and their most recent saved playlist will be displayed on the front page.',
      imageUrl: 'url-to-image-2.jpg',
      deployLink: 'https://provardjake.github.io/Audible-Atmosphere/',
      githubLink: 'https://github.com/provardjake/Audible-Atmosphere',
    },
    {
        id: 3,
        title: 'PokeSquads',
        description: 'A full stack Pokemon Website that was created using the Model, View, Controller paradigm.',
        imageUrl: 'url-to-image-2.jpg',
        deployLink: 'https://pokesquad-production.up.railway.app/login',
      githubLink: 'https://github.com/NoahAaronBurton/pokesquad',
      },
      {
        id: 4,
        title: 'Random Password Generator',
        description: "This is an application that will generate a random password under specified parameters outlined by a user. It is an app an employee can use to generate a random password based on criteria they've selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.",
        imageUrl: 'url-to-image-2.jpg',
        deployLink: 'https://jmpre28.github.io/random-password-generator/',
        githubLink: 'https://github.com/jmpre28/random-password-generator',
      },
      {
        id: 5,
        title: 'Work Day Scheduler',
        description: 'A simple calendar for scheduling your work day. This project uses real time through dayjs() and dynamically updates the page through time, or in this case, hours of the work day. It features save buttons that save user input to local storage which gives the user the ability to not lose their schedule. (Persistent data is stored and loaded)',
        imageUrl: 'url-to-image-2.jpg',
        deployLink: 'https://jmpre28.github.io/work-day-scheduler/',
        githubLink: 'https://github.com/jmpre28/work-day-scheduler',
      },
      {
        id: 6,
        title: 'Interactive Coding Quiz',
        description: "This project is an interactive coding quiz that leverages JavaScript logic to dynamically modify the HTML page, interact with user input, and store data persistently in the user's browser. It provides users with an opportunity to evaluate their understanding of JavaScript and allows them to save their scores to track their progress and compete with others.",
        imageUrl: './assets/images/code-quiz.jpg',
        deployLink: 'https://jmpre28.github.io/interactive-coding-quiz/',
        githubLink: 'https://github.com/jmpre28/interactive-coding-quiz',
      },
   
  ];
  
  const Portfolio = () => {
    return (
      <Container>
        <h2>My Portfolio</h2>
        <Card.Group>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              deployLink={project.deployLink}
              githubLink={project.githubLink}
            />
          ))}
        </Card.Group>
      </Container>
    );
  };
  
  export default Portfolio;