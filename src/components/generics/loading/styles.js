import styled from "styled-components";

export const LoadingBox = styled.div`
  ${props =>
    props.fixed
      ? `background: rgba(0,0,0,0.8);
        flex-direction: row;
        left: 0;
        position: fixed;
        top: 0;
        z-index: 15;`
      : `flex-direction: column;`}

  align-items: center;
  color: white;
  display: flex;
  font-size: 36px;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media (max-width: 568px) {
    flex-direction: column;
  }

  & > span {
    padding-left: 18px;
    text-align: center;
  }

  & > img {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
