import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import axios from 'axios';

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
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 600px;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 100%;
  padding: 25px;
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  bottom: 325px;
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
  padding: 25px 0 0 0;
  width: 200px;
  height: 200px;
`;

export default function AddModal({ setIsOpen, setPlants }) {
  const [image_url, setImageURL] = useState(null);
  const [name, setName] = useState('');
  const [common_name, setCommonName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // only allow upload of one picture
  const widget = window.cloudinary.createUploadWidget({
    cloudName: 'dkzeszwgm',
    uploadPreset: 'presetFEC',
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      setImageURL(result.info.url);
    }
  });

  const click = () => {
    widget.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name,
      common_name: [common_name],
      description,
      image_url,
      location,
    };

    const completed = Object.values(newEntry).every((value) => value !== '');

    if (completed) {
      axios.post('/plants', newEntry)
        .then((results) => {
          setPlants(results.data);
        })
        .then(() => {
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Background>
      <ModalContent>
        <ExitIcon onClick={() => setIsOpen(false)} />

        {image_url ? (
          <Button
            style={{ fontSize: '1em' }}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        )
          : (
            <Button
              style={{ fontSize: '1em' }}
              onClick={() => click()}
            >
              Upload Photo
            </Button>
          )}

        <Image src={image_url} />

        <FormContainer>
          <label>
            Name:
            <input type="text" onChange={(e) => { setName(e.target.value); }} />
          </label>
          <label>
            Common Name:
            <input type="text" onChange={(e) => { setCommonName(e.target.value); }} />
          </label>
          <label>
            Location:
            <input type="text" onChange={(e) => { setLocation(e.target.value); }} />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              cols="30"
              rows="8"
              onChange={(e) => { setDescription(e.target.value); }}
            />
          </label>
        </FormContainer>
      </ModalContent>
    </Background>
  );
}
