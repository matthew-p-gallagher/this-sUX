import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Tesseract from 'tesseract.js';

const WriteFirstName = ({ inputType, setInputType, setFirstName }) => {
	const canvasRef = useRef(null);
	const [recognizedCharacter, setRecognizedCharacter] = useState('');
	const [textboxValue, setTextboxValue] = useState('');
	const [tryCount, setTryCount] = useState(0);
	const [showGiveUpButton, setShowGiveUpButton] = useState(false);

	const handleRecognizeCharacter = () => {
		const canvas = canvasRef.current.canvasContainer.children[1];
		const imageBase64 = canvas.toDataURL('image/png');

		Tesseract.recognize(imageBase64, 'eng', {
			logger: (m) => console.log(m),
		})
			.then(({ data: { text } }) => {
				setRecognizedCharacter(text);
				if (text === '.' && tryCount >= 9) {
					setShowGiveUpButton(true);
				}
			})
			.catch((error) => console.error(error));
	};

	const handleClearCanvas = () => {
		canvasRef.current.clear();
		setRecognizedCharacter('');
		setTryCount((prevCount) => prevCount + 1);
		if (tryCount >= 9) {
			setShowGiveUpButton(true);
		}
	};

	const handleAddToTextbox = () => {
		if (recognizedCharacter) {
			setTextboxValue((prevValue) => prevValue + recognizedCharacter);
		}
	};

	const handleClearTextbox = () => {
		setTextboxValue('');
	};

	const handleGiveUp = () => {
		window.alert("You'll never make it to the top with that attitude");
	};

	const handleEnter = () => {
		setFirstName(textboxValue.replace(/\s/g, ''));
		setInputType(null);
	};

	return (
		<div>
			<h1>Please Enter Your First Name</h1>
			<div style={{ display: 'flex' }}>
				<div style={{ flex: 1 }}>
					<CanvasDraw ref={canvasRef} canvasWidth={300} canvasHeight={300} brushRadius={5} hideGrid />
					<div>
						<button onClick={handleRecognizeCharacter}>Recognize Character</button>
						<button onClick={handleClearCanvas}>Clear Canvas</button>
						<button onClick={handleAddToTextbox}>Add to Textbox</button>
						{showGiveUpButton && <button onClick={handleGiveUp}>Give Up</button>}
					</div>
				</div>
				<div style={{ flex: 1 }}>
					<p>Recognized Character:</p>
					<div>{recognizedCharacter}</div>
				</div>
			</div>
			<div>
				<input type='text' value={textboxValue} placeholder='Recognized Text' readOnly />
				<button onClick={handleClearTextbox}>Clear Textbox</button>
				<button onClick={handleEnter}>Enter</button>
			</div>
		</div>
	);
};

export default WriteFirstName;
