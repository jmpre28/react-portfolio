import React, { useState } from 'react';
import { Card, Image, Modal, Button } from 'semantic-ui-react';
import './styles/Card.css';

export default function ProjectCard({ title, description, imageUrl, deployLink, githubLink }) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <Card>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        trigger={<Image src={imageUrl} wrapped ui={false} onClick={handleOpenModal} />}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <p>{description}</p>
          <Modal.Description>
            <p>For more details about this project, navigate to the deployment or visit the GitHub repo!</p>
            <div>
              <Button as='a' href={deployLink} target="_blank" rel="noopener noreferrer" primary>
                Deployed App
              </Button>
              <Button as='a' href={githubLink} target="_blank" rel="noopener noreferrer" secondary>
                GitHub Repo
              </Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Card>
  );
}
