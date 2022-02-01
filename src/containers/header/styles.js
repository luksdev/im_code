import styled from 'styled-components';

export const Container = styled.main`
  ul {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }

  li {
    font-weight: 600;
    &:not(:first-child) {
      padding-left: 1em;
    }
    list-style-type: none;
  }

  .nav-item {
    cursor: pointer;
    &:hover {
      padding-bottom: 8px;
      border-bottom: 3px solid #7bcccc;
    }
  }
`;
