import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) What does CSS stand for?',
        options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets '],
        answer: 'Cascading Style Sheets'
        
    },
    {
        question: '2)  Which CSS property is used to change the text color of an element?',
        options: ['font-color', 'text-color', 'background-color', 'color'],
        answer: 'color'
    },
    {
        question: '3) Which CSS property is used to set the background color of an element?',
        options: ['color', 'background-color', 'background', 'bg-color'],
        answer: 'background-color'
    },
    {
        question: '4) What does the CSS property font-size control?',
        options: ['The size of the margin around the element', 'The size of the element itself', 'The size of the elements border', 'The size of the text font'],
        answer: 'The size of the text font'
    },
    {
        question: '5) How do you select an element with the ID "example" in CSS?',
        options: ['#example', '.example', ' element.example', '* example'],
        answer: '#example'
    }
];

function Css() {
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>CSS (Quiz)</h1>
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

export default Css;



































