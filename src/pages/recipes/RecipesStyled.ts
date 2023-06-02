import styled from "styled-components";

export const RecipesStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
  font-family: "Kaushan Script", cursive;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .tittle {
    font-family: "Kaushan Script", cursive;
  }

  .center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .book {
    background-color: #ff9966;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 74%;
    min-height: 760px;
    box-shadow: 10px 18px 18px 0 rgba(0, 0, 0, 0.2),
      0 18px 18px 0 rgba(0, 0, 0, 0.19);
  }
  .book-header {
    background-color: whitesmoke;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
  }
  .book-body {
    background-color: whitesmoke;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .book-footer {
    background-color: whitesmoke;
  }
  .border-botton-page {
    border-top-left-radius: 70%;
    border-top-right-radius: 70%;
    background-color: #ff9966;
    margin-bottom: 0;
    height: 20px;
  }
  .description {
    display: flex !important;
    flex-direction: column !important;
    text-align: left;
    padding-left: 1rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .item {
    margin-left: 5rem;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .image {
    cursor: pointer;
    width: 80%;
    box-shadow: 0 0 8px 8px white inset;
    border-radius: 10px;
    border: #ff9966 solid 5px;
  }
  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms, transform 500ms;
  }

  @media (max-width: 1452px) {
    .book {
      margin-top: 30rem !important;
    }
    .center {
      flex-direction: column;
    }
    .description {
      padding-left: 0rem;
      padding-right: 0.4rem;
    }
  }

  @media (max-width: 1242px) {
    .book {
      margin-top: 40rem !important;
    }
    .tittle {
      font-size: 18px;
    }
    .description {
      font-size: 14px;
    }
  }
`;




