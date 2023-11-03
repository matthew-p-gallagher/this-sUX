import React, { useState, useEffect } from 'react';

function Email({ inputType, setInputType, setEmail }) {
	const handleEnter = () => {
		setInputType(null);
	};

	return (
		<div>
			<p>Please email your email address to thissUX@email.com</p>
			<button onClick={handleEnter}>Back</button>
		</div>
	);
}

export default Email;
