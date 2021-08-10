import { useState } from "react";
import ReactMarkdown from 'react-markdown'

import { Container } from "./styles";

const InputWrite = () => {
  const [inputMarked, setInputMarked] = useState("");
  const handleChange = (e) => {
    setInputMarked(e.target.value);
  };

  return (
    <Container>
      <div className="writeInput">
        <textarea
          placeholder="Escreva aqui"
          onChange={handleChange}
          value={inputMarked}
        />
      </div>
      <div className="showMarked">
        <ReactMarkdown>{inputMarked}</ReactMarkdown>
      </div>
    </Container>
  );
};

export default InputWrite;
