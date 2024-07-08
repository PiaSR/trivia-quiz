

export function Startscreen ({startGame}) {
	return (
		<div className="start-container">
		<h1 className="start-title">Quizzical</h1>
		<h4 className="start-subtitle">A general knowledge trivia quiz game!</h4>

		<button 
			className="start-button"
			onClick={startGame}
		>
			Start quiz
		</button>
		</div>
	)
}