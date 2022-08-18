import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
`;

const ExitIcon = styled(MdClose)`
  position: absolute;
  padding: 2px;
  object-fit: cover;
  color: black;
  top: 10px;
  right: 10px;
  width: 27px;
  height: 27px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  object-fit: cover;
  color: black;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #DABECA;
  height: 500px;
`;

const CheckOutButton = styled.button`
  display: flex;
  position: absolute;
  top: 65px;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  align-items: center;
  width: 50%;
  height: 43px;
  border: 1px solid;
  border-radius: 26px;
  border-color: #5D5F71;
  background-color: #5D5F71;
  color: white;
  &:hover {
    border-color: black;
    background-color: black;
  }
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
`;

export default function AddModal({ setIsOpen }) {
  const [photoURL, setPhotoURL] = useState(null);

  // only allow upload of one picture
  const widget = window.cloudinary.createUploadWidget({
    cloudName: 'dkzeszwgm',
    uploadPreset: 'presetFEC',
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('data', result.info.url);
      setPhotoURL(result.info.url);
    }
  });

  const click = () => {
    widget.open();
  };

  return (
    <Background>
      <ModalContent>


          <ExitIcon onClick={() => setIsOpen(false)} />

          <CheckOutButton
            style={{ fontSize: '1em' }}
            onClick={() => click()}
          >
            Upload Photo
          </CheckOutButton>

          <Image src={photoURL} />

      </ModalContent>
    </Background>
  );
}
