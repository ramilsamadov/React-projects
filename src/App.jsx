import { useState ,useEffect} from 'react'
import './App.css'
import SingleCard from './components/SingleCard'
const cardImages=[
  {"src":"src/images/p1.png",matched:false},
  {"src":"src/images/p2.png",matched:false},
  {"src":"src/images/p3.png",matched:false},
  {"src":"src/images/p4.png",matched:false},
  {"src":"src/images/p5.png",matched:false},
  {"src":"src/images/p6.png",matched:false}
]

function App() {
  const [cards,setCards]=useState([])
  const [turns,setTurns]=useState(0)
  const [choiceOne,setChoiceOne]=useState(null)
  const [choiceTwo,setChoiceTwo]=useState(null)
  const [disabled,setDisabled]=useState(false)

  //shufle cards and turn
  const shuffleCards=()=>{
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTurns(0)
  }

  //handle a choice 
  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  //compare 2 selected cards
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src === choiceOne.src){
              return {...card,matched: true}
            }
            else{
              return card 
            }
          })
        })
        resetTurn()
      }else{
        setTimeout(()=>resetTurn(),1000)
      }
    }
  },[choiceOne, choiceTwo])
  console.log(cards)
  //reset choices & increase turns
  const resetTurn=()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns=>prevTurns+1)
    setDisabled(false)
  }
  //Start new game automatically
  useEffect(()=>{
    shuffleCards()
  },[])
  

  //Check if all cards are matched
  const isGameOver=()=>{
    return cards.every(card=>card.matched)
  }

  //Show win message when game is over
  if(isGameOver()){
    return(
      <div>
        <h2>Congratulations! You've won!</h2>
        <button onClick={shuffleCards}>Play Again</button>
      </div>
    )
  }

  //Show turns left
  const turnsLeft = 10 - turns
  if(turnsLeft<=0){
    return(
      <div>
        <h2>Game Over! You've lost.</h2>
        <button onClick={shuffleCards}>Play Again</button>
      </div>
    )
  }
      
  return (
  <div className='App'>
    <h1>Card Game</h1>
    <button onClick={shuffleCards}>New Game</button>
    <div className="card-grid">
      {cards.map(card=>(
        <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card===choiceOne || card===choiceTwo || card.matched} disabled={disabled}/>
      ))}
    </div>
    <p>Turns: {turns}</p>
  </div>
  )
}

export default App
