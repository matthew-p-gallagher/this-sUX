import React, { useState } from 'react';
import './App.css';
import WriteFirstName from './components/FirstName';
import WriteLastName from './components/LastName';
import PhoneGuess from './components/PhoneGuess';
import Email from './components/Email';

function App() {
	const [inputType, setInputType] = useState(null);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [lastNameCount, setLastNameCount] = useState(0);
	const [phoneNumber, setphoneNumber] = useState(null);
	const [email, setEmail] = useState(null);

	let componentToRender;

	if (inputType === 0) {
		componentToRender = (
			<WriteFirstName inputType={inputType} setInputType={setInputType} setFirstName={setFirstName} />
		);
	} else if (inputType === 1) {
		componentToRender = (
			<WriteLastName
				inputType={inputType}
				setInputType={setInputType}
				setLastName={setLastName}
				lastNameCount={lastNameCount}
				setLastNameCount={setLastNameCount}
			/>
		);
	} else if (inputType === 2) {
		componentToRender = (
			<PhoneGuess inputType={inputType} setInputType={setInputType} setphoneNumber={setphoneNumber} />
		);
	} else if (inputType === 3) {
		componentToRender = <Email inputType={inputType} setInputType={setInputType} setEmail={setEmail} />;
	} else if (inputType === 4) {
		componentToRender = <div>Thank you! Your information will be sold for our profit.</div>;
	}

	return (
		<div>
			<h1>This sUX</h1>
			{inputType === null && (
				<div>
					<button onClick={() => setInputType(0)}>Enter First Name</button>
					<button onClick={() => setInputType(1)}>Enter Last Name</button>
					<br />
					<button onClick={() => setInputType(2)}>Enter Phone</button>
					<button onClick={() => setInputType(3)}>Enter Email</button>
					<p>First Name: {firstName}</p>
					{lastName && lastNameCount < 3 && (
						<p>
							<span style={{ color: 'red' }}>Last Name taken. Please choose another.</span>
						</p>
					)}
					<p>Last Name: {lastName}</p>
					<p>Phone Number: {phoneNumber}</p>
					<p>Email: {email}</p>
					<button onClick={() => setInputType(4)}>Submit</button>
				</div>
			)}
			{componentToRender}
		</div>
	);
}

export default App;
