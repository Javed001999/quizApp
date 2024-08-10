import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) What does HTML stand for?',
        options: ['Hyperlink Markup Language', 'Hypertext Max Language', 'Hypertext Markup Language', 'Hypertext Marks Language'],
        answer: 'Hypertext Markup Language'
    },
    {
        question: '2) In HTML, which tag is used to define a paragraph?',
        options: ['<para>', '<p>', '<paragraph>', '<pg>'],
        answer: '<p>'
    },
    {
        question: '3) What does the <img> tag define in HTML?',
        options: ['A clickable image', 'An embedded video', 'An image', 'An italicized text'],
        answer: 'An image'
    },
    {
        question: '4) Which HTML tag is used to define an unordered list?',
        options: ['<ol>', '<li>', '<list>', '<ul>'],
        answer: '<ul>'
    },
    {

        question: '5) Which of the following elements is used to create a form in HTML?',
        options: ['<form>', '<input>', '<select>', '<button> '],
        answer: '<form>'
    }
];

function Html() {
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>HTML (Quiz)</h1>
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

export default Html;





















