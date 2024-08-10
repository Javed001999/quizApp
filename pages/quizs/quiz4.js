import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
    {
        question: '1) Which data structure follows the Last In First Out (LIFO) principle?',
        options: ['Queue', 'Stack', 'Linked List', 'Tree'],
        answer: 'Stack'
    },
    {
    question: '2) Which sorting algorithm has the best average-case time complexity?',
        options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
        answer: 'Merge Sort'
    },
    {
        question: '3) In which data structure does the traversal always start at the root node?',
        options: ['Stack', 'Queue', 'Linked List', 'Binary Tree'],
        answer: 'Binary Tree' 
    },
    {
        question: '4) Which algorithm is used to find the shortest path in a weighted graph?',
        options: ['Depth First Search (DFS)', 'Breadth First Search (BFS)', 'Dijkstra Algorithm', 'Prim Algorithm'],
        answer: 'Dijkstra Algorithm'
    },
    {
        question: '5) Which data structure is typically used for implementing a hash table?',
        options: ['Array', 'Linked List', 'Stack', 'Queue'],
        answer: 'Array'
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
         <h1 style={{color:"yellow", textAlign:"center",marginTop:"30px"}}>Data Structures and Algorithms (Quiz)</h1>
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

















