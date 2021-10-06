import "./styles.css";
import { Main } from "./componet-in-Styled-component/Main";
import { useState } from "react";

export default function App() {
  const [type, setType] = useState(false);
  return (
    <>
      <Main isActive={type}>
        <h1>Typescript</h1>
        <hr />
        <p>Styled component with typescript in React Js</p>
        <button type="button" onClick={() => setType(!type)}>
          Change the background
        </button>
      </Main>
    </>
  );
}
