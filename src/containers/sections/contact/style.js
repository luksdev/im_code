import styled from 'styled-components';

export const Container = styled.main`
  .contentContact {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-weight: 900;
    font-size: 2.5rem;
  }
  .left {
    width: 50%;
  }
  .contentText-left {
    width: 60%;
    margin: 0px auto;
  }

  .contentText-left p {
    text-align: start;
    width: 43ch;
    font-weight: 600;
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }

  .right {
    width: 50%;
  }
  .contentText-right {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  .contentText-right img {
    margin-top: 5rem;
    width: 30rem;
  }

  .team-subtitle {
    margin-top: 1.5rem;
    font-size: 3rem;
  }

  /* área do linkedin */

  .socials-media {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-socials {
    width: 40%;
  }
  .right-socials {
    width: 60%;
  }

  .follows {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 0px 1rem 0px 1rem;
    height: 300px;
    background-color: #1d2020;
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: space-around;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .follows span {
    font-weight: 800;
    font-size: 1.8rem;
    width: 15ch;
  }

  .arrow {
    border: 1px solid white;
    border-radius: 50px;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  hr.solid {
    width: 100%;
    border-top: 0.5px solid;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .donate {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }
  .donate span {
    font-size: 2rem;
    font-weight: 800;
    margin-right: 2rem;
  }

  .title-donate {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .donate p {
    font-weight: 700;
    margin-bottom: 1rem;
  }
  /* parte da direita */

  .contentRight {
    width: 80%;
    min-height: 80vh;
    background-color: #7bbfbf;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
  }

  .idealizador {
    width: 40%;
    display: flex;
    min-height: 70vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 1rem 3rem 1rem;
    border-radius: 30px;
    border: 2px solid white;
  }
  .design {
    min-height: 100%;
    display: flex;
    width: 40%;
    min-height: 70vh;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 1rem 3rem 1rem;
    border-radius: 30px;
    border: 2px solid white;
  }

  .position {
    font-size: 14px;
    font-weight: 700;
  }
  .name {
    margin-top: 1rem;
    font-size: 16px;
    font-weight: 700;
  }
  .description {
    margin-top: 1rem;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    line-height: 1rem;
    margin-bottom: 3rem;
  }

  .followme {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
