import dice from './assets/icon-dice.svg';
import Advice from './Advice';
import './App.css';
import { useState } from 'react';

function App() {
	const [advice, setAdvice] = useState({
		number: 114,
		text: 'It is easyto sit up and take notice, whats difficult is getting up and taking action.',
	});

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

			<button className='advice-search'>
				<img src={dice} alt='' className='advice-dice' />
			</button>
		</div>
	);
}

export default App;
