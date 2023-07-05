import dice from './assets/icon-dice.svg';
import Advice from './Advice';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [advice, setAdvice] = useState({});

	const fetchAdvice = () => {
		fetch('https://api.adviceslip.com/advice')
			.then((response) => response.json())
			.then((data) =>
				setAdvice({ number: data.slip.id, text: data.slip.advice })
			);
	};

	useEffect(() => {
		fetchAdvice();
	}, []);

	// https://api.adviceslip.com

	return (
		<div className='advice-card'>
			<Advice advice={advice} />

			<picture className='divider'>
				<source
					media='(min-width: 768px)'
					srcSet='src/assets/pattern-divider-desktop.svg'
				/>
				<img src='src/assets/pattern-divider-mobile.svg' alt='' />
			</picture>

			<button className='advice-search' onClick={fetchAdvice}>
				<img src={dice} alt='' className='advice-dice' />
			</button>
		</div>
	);
}

export default App;
