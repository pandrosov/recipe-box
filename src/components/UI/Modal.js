import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(122, 122, 122, 0.5);
  overflow: hiden;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 25px;
`;

const ModalTitle = styled.div`
  color: red;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Modal = styled.div`
  position: relative;
  background-color: white;
  padding: 1rem;
  width: 300px;
`;

const Popup = ({ title, visible, children, onClose }) => {
  return (
    <>
      {visible && (
        <ModalWrapper>
          <Modal>
            <ModalTitle>
              <h1>{title}</h1>
            </ModalTitle>
            <ModalBody>{children}</ModalBody>
            <ModalClose>
              <Button onClick={onClose}>&times;</Button>
            </ModalClose>
          </Modal>
        </ModalWrapper>
      )}
    </>
  );
};

export default Popup;
