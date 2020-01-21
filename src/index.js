import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const btnText = "big button";
function People() {
  return (
    <section>
      <Person name="naveen meka" job="developer"></Person>
      <Person name="Raghu meka" job="engineer"></Person>
      <Person name="sudheer meka" job="finace" age="23"></Person>
    </section>
  );
}
const Person = props => {
  console.log(props);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <p>
        <p>{props.age}</p>
      </p>
      <hr />
    </article>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
