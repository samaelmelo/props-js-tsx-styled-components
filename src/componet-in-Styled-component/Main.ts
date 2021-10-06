import styled from "styled-components";

interface MainProps {
  isActive: boolean;
}

export const Main = styled.main<MainProps>`
  background: ${(props) => (props.isActive ? "lightskyblue" : "lightgreen")};
  width: 100%;
  min-height: 100vh;

  h1,
  p {
    text-align: center;
  }
`;
