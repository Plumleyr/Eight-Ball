import { useState } from "react"
import './EightBall.css'
const EightBall = ({answers}) => {
    const getRandAns = () => {
        return Math.floor(Math.random() * answers.length)
    }
    const [answer, getAnswer] = useState({"msg": "Think of a Question", "color": "black"})
    return(
        <div className="EightBall-eightBall" style={{backgroundColor: `${answer.color}`}} onClick={() => getAnswer(answers[getRandAns()])}>
            <p>{answer.msg}</p>
        </div>
    )
}

export default EightBall