import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Quiz() {
    const router = useRouter();

    const handleQuiz1 = () => {
        router.push('/quizs/quiz1');
    };

    const handleQuiz2 = () => {
        router.push('/quizs/quiz2');
    };

    return (
        // <>
        //     <div>
        //         <h1 className='fingerdown'>Click here 👇 to see  quizs</h1>
        //     </div>
        //     <div className='q1'>
        //         <button><button style={{ marginLeft: "10px", marginRight: "10px" }} className='quizbutton1' onClick={handleQuiz1}>Quiz1</button></button>
        //     </div>
        //     <div className='q2'>
        //         <button><button style={{ marginLeft: "10px", marginRight: "10px" }} className='quizbutton2' onClick={handleQuiz2}>Quiz2</button></button>
        //     </div>
        // </>
        //------------------------------------------------------------------------------------------------
        <>
            <h1 style={{ color: "yellow", textAlign: "center" }}>Prepare By Topics</h1>

            <div class="myDiv1">
                <Link href="/topic/html"> <button className='html-button'>HTML</button> </Link>
            </div>
            <div class="myDiv2">
                <Link href="/topic/css"> <button className='css-button'>CSS</button> </Link>
            </div>
            <div class="myDiv3">
                <Link href="/topic/javascript"> <button className='javascript-button'>JavaScript</button> </Link>
            </div>
            <div class="myDiv4">
                <Link href="/topic/reactjs"> <button className='reactjs-button'>React JS</button> </Link>
            </div>
            <div class="myDiv5">
                <Link href="/topic/nodejs"> <button className='nodejs-button'>Node JS</button> </Link>
            </div>
            <div class="myDiv6">
                <Link href="/topic/mongodb"> <button className='mongodb-button'>MongoDB</button> </Link>
            </div>
        </>
    );
};



























