import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 4rem;

  .contentProjec {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .title {
    text-align: center;
    font-weight: 900;
    font-size: 2.5rem;
  }

  .left {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .left span {
    font-weight: 900;
    font-size: 1.3em;
  }

  .left img {
    margin-top: 3rem;
    width: 250px;
  }

  .left .description {
    border-left: 4px solid #86d1d1;
    padding-left: 0.5rem;
    margin-top: 3rem;
    width: 36ch;
    font-weight: 700;
  }

  .right {
    width: 50%;
    height: 100%;
    background-color: #1d2020;
    color: #ffffff;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  .right span {
    font-weight: 900;
    font-size: 1.3em;
    letter-spacing: 1.2px;
  }

  .contentTexts {
    width: 70%;
    padding: 3rem;
    padding-left: 4rem;
  }

  .contentTexts p {
    width: 38ch;
    padding-top: 1.5rem;
    font-size: 16px;
    font-weight: 600;
  }

  .contentTexts .socials-name {
    font-size: 18px;
    text-decoration: none;
    color: #86d1d1;
  }

  .socials {
    margin-top: 2rem;
    cursor: pointer;
  }

  #instagram-logo {
    margin-left: 0.5rem;
  }
`;
