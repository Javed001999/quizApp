import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) Which programming language is commonly used for web development?',
        options: ['Java', 'C++', 'HTML', 'Python'],
        answer: 'HTML'
    },
    {
    question: '2) Which file format is commonly used for compressing multiple files into a single archive?',
        options: ['.exe', '.zip', '.docx', '.mp3'],
        answer: '.zip'
    },
    {
        question: '3) What does CPU stand for?',
        options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Programming Unit', 'Computer Programming Unit'],
        answer: 'Central Processing Unit' 
    },
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
         <h1 style={{color:"yellow", textAlign:"center",marginTop:"30px"}}>Computer Fundamentals (Quiz)</h1>
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

















