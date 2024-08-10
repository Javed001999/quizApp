import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) Which of the following is NOT a type of computer network?',
        options: ['LAN (Local Area Network)', 'WAN (Wide Area Network)', 'WLAN (Wireless Local Area Network)', 'CPU (Central Processing Unit)'],
        answer: 'CPU (Central Processing Unit)'
    },
    {
        question: '2) Which protocol is used to send emails over the internet?',
        options: ['FTP (File Transfer Protocol)', 'SMTP (Simple Mail Transfer Protocol)', ' HTTP (Hypertext Transfer Protocol)', 'DHCP (Dynamic Host Configuration Protocol)'],
        answer: 'SMTP (Simple Mail Transfer Protocol)'
    },
    {
        question: '3) Which of the following is a topological design where each device is connected to a central point?',
        options: ['Bus', 'Ring', 'Star', 'Mesh'],
        answer: 'Star'
    },
    {
        question: '4) What does the acronym VPN stand for in the context of networking?',
        options: ['Virtual Private Network', 'Very Private Network', 'Visual Processing Node', 'Virtual Protocol Node'],
        answer: 'Virtual Private Network'
    },
    { 
        question: '5) Which protocol is commonly used for secure communication over the Internet?',
        options: ['FTP', 'HTTP', 'HTTPS', 'SNMP'],
        answer: 'HTTPS'
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
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "30px" }}>Computer Network (Quiz)</h1>
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

















