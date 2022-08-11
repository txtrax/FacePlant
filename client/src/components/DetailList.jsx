import React from 'react';
import styled from 'styled-components';
import Details from './Details';

const Header = styled.h2`
  padding: 0 20px;
`;

const DetailListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default function DetailList({ plants }) {
  return (
    <div>
      <Header>Details</Header>

      <DetailListContainer>
        {plants.map((plant) => <Details plant={plant} />)}
      </DetailListContainer>
    </div>
  );
}
