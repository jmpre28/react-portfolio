import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const ProjectCard = ({ title, description, imageUrl, deployLink, githubLink }) => {
  return (
    <Card>
      {imageUrl && <Image src={imageUrl} wrapped ui={false} />}
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {deployLink && (
          <Button
            as="a"
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            primary
          >
            Deployed App
          </Button>
        )}
        {githubLink && (
          <Button
            as="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            secondary
          >
            GitHub Repo
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;