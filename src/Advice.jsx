export default function Advice({ advice }) {
	const { number, text } = advice;

	return (
		<>
			<h5 className='advice-number'>Advice #{number}</h5>
			<h3 className='advice-text'>{text}</h3>
		</>
	);
}
