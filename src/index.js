import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// function Greeting() {
//   return (
//     //     <section>
//     //       <div>
//     //         <h1>this is john and this my first react component</h1>
//     //       </div>
//     //       <div>
//     //         <ul>
//     //           <li>
//     //             <a href="#">Home</a>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </section>
//     //   );

//     <section>
//       <Person></Person>
//       <Message></Message>
//     </section>
//   );
// }
function Books() {
  return (
    <section className="books">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};
const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg"
  />
);
const Title = () => (
  <h2 style={{ fontSize: "16px", color: "yellow" }}>The wonkey donkey</h2>
);
const authorStyle = {
  letterspacing: "10px",
  color: "green"
};
const Author = () => <p style={authorStyle}>The wonkey Donkey</p>;

ReactDOM.render(<Books />, document.getElementById("root"));
