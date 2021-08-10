import marked from "marked";
import { useState } from "react";
import { Container } from "./styles";

const InputWrite = () => {
  const [inputMarked, setInputMarked] = useState("");
  const handleChange = (e) => {
    setInputMarked(e.target.value);
  };
  var md = window.markdownit();
  var result = md.render("# markdown-it rulezz!");

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
        {result}
      </div>
    </Container>
  );
};

export default InputWrite;
