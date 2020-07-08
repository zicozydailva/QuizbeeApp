import React, {useState} from 'react'

const QuestionBox = ({question, options, Selected}) => {

  const [answer, setAnswer] = useState(options)
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
        {
          answer.map((text, index) => (
            <button key={index} onClick={() => {setAnswer([text]); Selected(text)} } className="answerBtn">{text}</button>
          ))
        }
    </div>
  )
}

export default QuestionBox
