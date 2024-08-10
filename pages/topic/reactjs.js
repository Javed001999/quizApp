import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) What is React.js?',
        options: ['database management system', 'programming language', 'server-side framework', 'JavaScript library for building user interfaces'],
        answer: 'JavaScript library for building user interfaces'
    },
    {
        question: '2) What does JSX stand for in React.js?',
        options: ['JavaScript Extensible', 'JavaScript XML', 'JSX is not an acronym', 'JavaScript XQuery'],
        answer: 'JavaScript XML'
    },
    {
        question: '3) What is the purpose of props in React.js?',
        options: ['To handle component styling', 'To define component structure', 'To manage component state', 'To pass data from parent to child components'],
        answer: 'To pass data from parent to child components'
    },
    {
        question: '4) Which of the following is used in React.js to increase performance?',
        options: ['Virtual DOM', 'Original DOM', 'Both A and B', 'None of the above'],
        answer: 'Virtual DOM'
    },
    {
        question: '5) How can you prevent the default behavior of an event in React?',
        options: ['event.preventDefault()', 'event.stopEvent()', 'event.stopPropagation()', 'event.halt()'],
        answer: 'event.preventDefault()'
    }
];

function Reactjs() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const router = useRouter();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const handleTryAgain = () => {
        router.reload();
    }

    return (
        <>
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>React Js (Quiz)</h1>
            <div className="quiz-app">
                {showScore ? (
                    <div className="score-section">
                        {/* You scored {score} out of {questions.length}  */}
                        You scored : {score}/{questions.length}
                        <button className="try-again" onClick={handleTryAgain}>Try Again</button>
                    </div>
                ) : (
                    <>

                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">{questions[currentQuestion].question}</div>
                        </div>
                        <div className="options-section">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button key={index} className={`option ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>{option}</button>
                            ))}
                        </div>

                        {selectedOption && <button className="next-button" onClick={handleNextQuestion}>Next →</button>}

                    </>
                )}
            </div>
        </>
    );
};

export default Reactjs;





















;


















