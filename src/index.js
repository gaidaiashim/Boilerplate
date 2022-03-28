import React from "react";
import ReactDOM from "react-dom";

// const h1JSX = <h1>Мир! Дружба! Жвачка!</h1>;

// const createTitle = () => <h1>Мир! Дружба! Жвачка!</h1>;
// const createBody = () => 
// 	<React.Fragment>
// 		<div>Мир! Дружба! Жвачка!</div>
// 		<div>Мир! Дружба! Жвачка!</div>
// 	</React.Fragment>;

const Header = () => <header>header</header>;

const List = (props) => {
return (
	<ol>
		{props.todos.map((el, i) => (
			<li>{el}</li>
		))}
	</ol>
);
}

const Body = (props) => {
	// console.log(props);
	// const todos = props.todos;
	return <>
	<div>{props.title}</div>
	<List todos={props.todos}/>
	</>;
	
}
const Footer = () => <footer>footer</footer>;

const Misha = () => 
	<React.Fragment>
		<Header />
		<Body todos = {["1", "2", "3"]} title={"title"}></Body>
		<Footer></Footer>
	</React.Fragment>;

// ReactDOM.render(createTitle(), document.querySelector("#root"));
ReactDOM.render(<Misha />, document.querySelector("#root"));