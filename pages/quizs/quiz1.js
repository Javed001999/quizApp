import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) The currency of India is called:',
        options: ['Rupiah', 'Ringgit', 'Baht', 'Rupee'],
        answer: 'Rupee'
    },
    {
        question: '2) What is 2+2x2 ?',
        options: ['12', '8', '4', '6'],
        answer: '6'
    },
    {
        question: '3) Who wrote "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
        answer: 'William Shakespeare'
    },
    {
        question: '4) Which of the following is the national animal of India?',
        options: ['Tiger', 'Lion', 'Elephant', ' Peacock'],
        answer: 'Tiger'
    },
    {
        question: '5) What is the highest civilian award in India?',
        options: ['Bharat Ratna', 'Padma Bhushan', 'Padma Vibhushan', 'Padma Shri'],
        answer: 'Bharat Ratna'
    }
];

function Quiz() {
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>General Studies (Quiz)</h1>
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

export default Quiz;


