import React from 'react';
import { Modal, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './InfoModal.scss';

const InfoModal = ({ isOpen, onClose, title, content }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="info-modal">
        <div className="modal-header">
          <Typography variant="h5">{title}</Typography>
          <Button variant="text" color="inherit" onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        <Typography variant="body1">{content}</Typography>
      </div>
    </Modal>
  );
};

export default InfoModal;
