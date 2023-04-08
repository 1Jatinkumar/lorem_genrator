import { useState } from "react";
import {nanoid} from 'nanoid'
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount= parseInt(count)
    const para = data.slice(0, amount);
    setText(para);
  };

  console.log(text);
  return (
    <section className="section-center">
      <h4>Lorem Ipsum generator</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
          {text.map((item,)=>{
            return <p key={nanoid()}>{item}</p>
          })}
      </article>
    </section>
  );
};
export default App;
