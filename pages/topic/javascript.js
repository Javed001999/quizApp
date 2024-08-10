import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) What is the correct way to write a comment in JavaScript?',
        options: ['<!--This is a comment-->', '//This is a comment', '/This is a comment/', '#This is a comment'],
        answer: '//This is a comment'
    },
    {
        question: '2) Which function is used to convert a string to an integer in JavaScript?',
        options: ['toInteger()', 'parseFloat()', 'castInt()', 'parseInt()'],
        answer: 'parseInt()'
    },
    {
        question: '3) Which keyword is used to declare a variable in JavaScript?',
        options: ['var', 'let', 'Const', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: '4) What does the NaN stand for in JavaScript?',
        options: ['Not a Null', ' Null and Number', 'Not a Number', 'None of the above'],
        answer: 'Not a Number'
    },
    {
        question: '5) Which of the following methods can be used to display data in some form using Javascript?',
        options: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
        answer: 'All of the above'
    }
];

function JavaScript() {
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>JavaScript (Quiz)</h1>
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

export default JavaScript;







































