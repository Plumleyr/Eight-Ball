import eightBallData from './eightBallData.json'
import EightBall from './EightBall'
import './App.css'


  function App(){
    return(
      <div className='App-eightBall'>
      <EightBall answers ={eightBallData}/>
      </div>
    )
  }

export default App
