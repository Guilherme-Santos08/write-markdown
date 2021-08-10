import { useState } from "react";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown'

import { PreBlock } from "../SyntaxHighlighter";

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
        <Markdown
          options={{
            overrides: {
              pre: PreBlock,
            },
          }}
        >
          {inputMarked}
        </Markdown>
      </div>
    </Container>
  );
};

export default InputWrite;
