import styled from 'styled-components';

export const Container = styled.main`
  .AdaWendy {
    margin-top: 2rem;
    display: flex;
    min-width: 100%;
  }
  .contentHome {
    min-width: 45%;
  }
  .illustration {
    display: flex;
    min-width: 55%;
    text-align: center;
    justify-content: center;

    align-items: center;
  }
  /* contentHome */
  .description {
    display: flex;
    flex-direction: column;
    background-color: #7bcccc;
    min-height: 25rem;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    justify-content: center;
    align-items: center;
  }

  .name {
    margin-left: 30%;
    font-size: 30px;
    margin-bottom: -5px;
    font-weight: 500;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 20rem;
    word-wrap: break-word;
  }

  .description h1 {
    color: #151717;
    padding-top: 5px;
    font-size: 2.5rem;
    font-weight: 900;
  }

  .description p {
    color: #f1f9f9;
    font-weight: 600;

    &:last-child {
      margin-top: 20px;
    }
  }

  .illustration img {
    max-width: 500px;
    margin-bottom: -4rem;
  }

  /* ContentPracticality */

  .practicality {
    display: flex;
  }

  .illustration-phone {
    display: flex;
    min-width: 45%;
    min-height: 300px;
    justify-content: center;
    align-items: center;
  }

  .illustration-phone img {
    max-width: 600px;
    /* position: absolute; */
  }

  .contentTexts {
    margin-top: 5rem;
  }

  .contentTexts h1 {
    color: #161919;
    font-size: 2.5rem;
    font-weight: 800;
  }

  .contentTexts h2 {
    color: #28a3a4;
    font-size: 2.5rem;
    width: 18ch;
  }

  .contentTexts p {
    padding-top: 2rem;
    width: 45ch;
    font-weight: 600;
  }

  .list-features {
    font-weight: 600;
    margin-top: 2rem;
  }

  .list-features li {
    list-style-type: none;
    display: flex;
    align-items: center;
    &:not(:first-child) {
      padding-top: 1rem;
    }
  }

  .list-features span {
    padding-left: 1rem;
  }

  .app-designated span {
    padding: 0px 0.2rem;
  }

  /* Many Functions */

  .manyFunctions {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    text-align: center;
    font-weight: 900;
    font-size: 2.5rem;
    width: 15ch;
  }

  .carousel {
    margin-top: 4rem;
    width: 100%;
    text-align: center;
    background-color: #7bbfbf;
    padding-bottom: 2rem;
  }

  .otherFunctions {
    margin-top: 10px;
    font-size: 14;
    font-weight: 600;
    color: #f1f9f9;
  }

  /* box slide */

  .box-card {
    background-color: #ffffff;
    width: 450px;
    height: 300px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box-content {
    width: 90%;
  }
  .box-title {
    font-weight: 700;
    width: 20ch;
  }
  .color-category {
    width: 15%;
    background-color: #ff50f7;
    height: 20px;
    border-radius: 5px;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .box-comment {
    text-align: start;
    margin-left: 1rem;
    margin-top: 1rem;
    width: 34ch;
  }
  .box-button {
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  .box-button button {
    padding: 0.6rem;
    width: 85%;
    border: 1px solid #7bbfbf;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: #7bbfbf;
      color: white;
    }
  }
`;
