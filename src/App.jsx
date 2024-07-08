import { useState, useEffect } from 'react'
import {decode} from 'html-entities'
import { Startscreen } from './Startscreen'
import { Quiz } from './Quiz'

function App() {
 
  const [loading, setLoading] = useState(false)
  const [initialStart, setInitialStart] = useState(true)
  const [questions, setQuestions] = useState([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [selected, setSelected] =useState({})
  const [correctAnswers, setCorrectAnswers] =useState(0)
 

  useEffect(() => {
    if(gameStarted){
      setLoading(true)
      console.log('useEffect called')
		fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
		.then(response => {
			if (!response.ok) {
			  throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		  })
			.then(data => {
				const formattedQuestions = data.results.map(question => {
					const answers = [...question.incorrect_answers]
					const correctAnswerIndex = Math.floor(Math.random() * (answers.length+1))
					answers.splice(correctAnswerIndex, 0, question.correct_answer)
					return {
						      question: typeof question.question === 'string' ? decode(question.question) : question.question,
            			answers: answers.map(answer => (typeof answer === 'string' ? decode(answer) : answer)),
            			correctAnswer: typeof question.correct_answer === 'string' ? decode(question.correct_answer) : question.correct_answer
					}
				})
				setQuestions(formattedQuestions)
        setLoading(false)
      
			})
			.catch(error => console.log('Error fetching question', error))
}}, [gameStarted])
  

  function startGame() {
      setGameStarted(true)
      console.log(gameStarted)
      setGameEnded(false);
      setSelected({})
      setCorrectAnswers(0)
      setInitialStart(false)
      
      
  }

  function answerSelected(qIndex, answer) {
    setSelected(oldSelected => ({
      ...oldSelected,
      [qIndex]: answer
    }))
      
	}

  function checkAnswers() { 
    let correctCount = 0;
    questions.forEach((question, qIndex) => {
      if(selected[qIndex]===question.correctAnswer) {
        correctCount++
      }
    })

    setGameEnded(true)
    setCorrectAnswers(correctCount)
    
    
  }
 
function startNewGame () {
  setGameStarted(false);
  setTimeout(() => {
    startGame();
  }, 0)
  
}

  return (
      <>
        { !gameStarted && initialStart &&  <Startscreen startGame={startGame}/>  }
        { gameStarted && (
        loading 
          ? <div className='loading-screen'>
              <h4>Loading </h4>
              <div className='loader-dots'></div>
             
            </div>
          : <Quiz 
            questions={questions}
            checkAnswers={checkAnswers} 
            gameEnded={gameEnded}
            selected={selected}
            answerSelected={answerSelected}
            correctAnswers={correctAnswers}
            startNewGame={startNewGame}
            /> 
          )}
      
      </>
  )

}

export default App
