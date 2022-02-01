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

  /* Os 4 mestres */

  .fourMasters {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .left-masters {
    width: 48%;
  }
  .right-masters {
    width: 52%;
  }

  /* lado esquerdo */

  .contentTexts-left {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    height: 725.05px;
    background-color: #1d2020;
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
  }

  .contentTexts-left span {
    width: 50%;
    font-size: 2.5rem;
    font-weight: 900;
  }

  .contentTexts-left p {
    padding-top: 3rem;
    width: 50%;
    font-size: 1.1rem;
    font-weight: 800;
  }

  .contentTexts-right ul li {
    list-style-type: none;
  }

  /* lado direito */

  .contentTexts-right {
    width: 75%;
    padding-left: 5rem;
  }

  .num-title {
    margin-bottom: 1rem;
    &:not(first-child) {
      margin-top: 2rem;
    }
  }

  .number-list {
    font-weight: 900;
    font-size: 1.8rem;
  }

  .title-list {
    font-weight: 800;
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }

  .contentTexts-right p {
    font-weight: bold;
  }
`;
