import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) What type of NoSQL database is MongoDB?',
        options: ['Document-oriented', 'Key-value', 'Column-oriented', 'Graph-based'],
        answer: 'Document-oriented'
    },
    {
        question: '2) Which of the following is NOT a way to interact with MongoDB?',
        options: ['Command-line interface (CLI)', 'MongoDB Compass', 'MongoDB Shell', 'MongoDB Browser'],
        answer: 'MongoDB Browser'
    },
    {
        question: '3) Which command is used to create a new database in MongoDB?',
        options: ['db.createDatabase()', 'db.makeDB()', 'useDatabase()', 'createDB()'],
        answer: 'db.createDatabase()'
    },
    {
        question: '4) Which of the following is NOT a valid data type in MongoDB?',
        options: ['String', 'Date', 'Float', 'Decimal'],
        answer: 'Decimal'
    },
    {
        question: '5) Which data format does MongoDB store its data in?',
        options: ['JSON', 'XML', 'CSV', 'YAML'],
        answer: 'JSON'
    },
];

function Mongodb() {
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>MongoDB (Quiz)</h1>
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

export default Mongodb;







































