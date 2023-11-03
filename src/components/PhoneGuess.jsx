import React, { useState, useEffect } from 'react';

function PhoneGuess({ inputType, setInputType, setphoneNumber }) {
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(10000000000);
	const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(min, max));

	function generateRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	const displayCurrentGuess = () => {
		return currentGuess.toString().padStart(11, '0');
	};

	const handleHigherClick = () => {
		setMin(currentGuess + 1);
		setCurrentGuess(generateRandomNumber(currentGuess + 1, max));
	};

	const handleLowerClick = () => {
		setMax(currentGuess - 1);
		setCurrentGuess(generateRandomNumber(min, currentGuess - 1));
	};

	const handleEnter = () => {
		setphoneNumber(currentGuess.toString().padStart(11, '0'));
		setInputType(null);
	};

	return (
		<div>
			<p>Enter your phone number:</p>
			<input id='number-display' type='text' value={displayCurrentGuess()} readOnly />
			<br />
			<button onClick={handleHigherClick}>Higher</button>
			<button onClick={handleLowerClick}>Lower</button>
			<button onClick={handleEnter}>Enter Number</button>
		</div>
	);
}

export default PhoneGuess;
