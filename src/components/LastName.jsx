import React, { useRef, useState } from 'react';

const WriteLastName = ({ inputType, setInputType, setLastName, lastNameCount, setLastNameCount }) => {
	const [text, setText] = useState('');

	const handleEnter = () => {
		setLastName(text);
		setLastNameCount(lastNameCount + 1);
		setInputType(null);
	};

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div>
			<h1>Please Enter Your Last Name</h1>
			<input type='text' value={text} onChange={handleTextChange} placeholder='Enter your last name' />
			<button onClick={handleEnter}>Enter</button>
		</div>
	);
};

export default WriteLastName;
