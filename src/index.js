import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

//DESTRUCTURING

function People() {
  const friends = [
    { name: "Naveen", job: "developer", age: 27, company: "deloitte" },
    { name: "sudhi", job: "finace", age: 23, company: "genpact" },
    { name: "chandu", job: "designer", age: 27, company: "google" }
  ];
  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const person = {
  name: "Navi",
  age: 26
};
const { name } = person;
// console.log(name);

const showPerson = ({ name, age }) => console.log(name, age);

showPerson(person);

const Person = props => {
  console.log(props);
  const { name, job, age, company } = props.person;
  //({ person: { name, job, age, company } }) => {
  //const { name, job, age, company } = props.person;

  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{props.person.company}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
