import styled from "styled-components";

export const HomeStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
  font-family: "Kaushan Script", cursive;

  .book {
    background-color: #993300;
    color: whitesmoke;
    padding-left: 2rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 20px 25px 25px 0 rgba(0, 0, 0, 0.2),
      10px 25px 25px 0 rgba(0, 0, 0, 0.19);
  }
  .book-header {
    background-color: #ff9966;
    border-top-right-radius: 5px;
  }
  .book-body {
    background-color: #ff9966;
    border-bottom-right-radius: 5px;
  }
  .tittle {
    font-size: 60px;
    font-family: "Kaushan Script", cursive;
  }
  img {
    max-height: 300px;
  }
  .btn-open {
    letter-spacing: 5px;
    font-size: 20px;
  }
`;
