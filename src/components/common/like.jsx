import React from "react";
//Stateless Functional Component
const Like = (props) => {
	let classes = "fa fa-thumbs-up";
	if (!props.liked) classes = "fa fa-thumbs-o-up";
	return (
		<i
			onClick={props.onClick}
			style={{ cursor: "pointer" }}
			className={classes}
			aria-hidden="true"
		></i>
	);
};

export default Like;
