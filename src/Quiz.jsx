import {decode} from 'html-entities'; 
import { useState, useEffect } from 'react';

export function Quiz ( {questions, checkAnswers, gameEnded, selected, answerSelected, correctAnswers, startNewGame}) {



	return (
		<div className='quiz'>
		{questions.map((question, qIndex) => (
		  <div className='quiz-qanda' key={qIndex}>
			<h3 className='quiz-question'>{question.question}</h3>
			<div className='quiz-answer-array'>
			  {question.answers.map((answer, aIndex) => {
					const isSelected = selected[qIndex] === answer;
					const isCorrect = answer === question.correctAnswer;
					const answerClass = gameEnded
						? isCorrect
							? 'quiz-answer correct '
							: isSelected
							? 'quiz-answer incorrect'
							: 'quiz-answer game-ended'
						:isSelected
							? 'quiz-answer selected'
							: 'quiz-answer'
				
				return (
				<div 
					onClick={() => answerSelected(qIndex, answer)}
					className={answerClass} 
					key={aIndex}>
				  <input 
					type="radio" 
					id={`q${qIndex}_a${aIndex}`} 
					name={`q${qIndex}`} 
					value={answer}
					
					 
				  />
				  <label 
				  	htmlFor={`q${qIndex}_a${aIndex}`} 
					>{answer}</label>
				</div>
			  );
			})}
			</div>
			<hr className="divider"/>
		  </div>
		))}

		<div className='bottom-row'>
		<span className='correct-answer-count'>{gameEnded && `You scored ${correctAnswers}/5 correct answers`}</span>

		

		{!gameEnded && <button 
			onClick={checkAnswers}
			className='submit-button check-answers'
			
			>
				Check Answers
		</button>}

		{gameEnded && <button 
			onClick={startNewGame}
			className='submit-button game-end'
			>
				Play Again
		</button>}
		
		</div>
	  </div>

)
}