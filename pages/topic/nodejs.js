import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) What is Node.js?',
        options: ['front-end JavaScript framework', 'back-end JavaScript runtime', 'database management system', 'markup language'],
        answer: 'back-end JavaScript runtime'
    },
    {
        question: '2) What does npm stand for in the context of Node.js?',
        options: ['Node Package Manager', 'New Program Module', 'Node Project Manager', 'Network Protocol Manager'],
        answer: 'Node Package Manager'
    },
    {
        question: '3) Which HTTP method is typically used to retrieve data from a server in Node.js?',
        options: ['GET', 'POST', 'PUT', ' DELETE'],
        answer: 'GET'
    },
    {
        question: '4) Which of the following is NOT a framework built on top of Node.js?',
        options: ['Express.js', 'React.js', 'Nest.js', 'Koa.js'],
        answer: 'React.js'

    },
    {
        question: '5) Which of the following is NOT a valid HTTP method used in Node.js?',
        options: ['GET', 'POST', 'DELETE', 'CREATE'],
        answer: 'CREATE'
    },
];

function  Nodejs() {
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>Node.js (Quiz)</h1>
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

export default Nodejs;







































