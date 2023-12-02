import styled from 'styled-components';

export const Poster404Styled = styled.img`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Description404 = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  position: absolute;
  left: 2%;
  top: 2%;
  font-size: 10rem;
  color: white;
  border-radius: 50px;
  padding: 40px;
  text-align: center;
  & > a {
    background-color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    text-decoration: none;
    color: black;
    border: 5px solid black;
    width: 60%;
    text-align: center;
    border-radius: 50px;
  }
`;
