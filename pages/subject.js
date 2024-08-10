import React from 'react';
import { useRouter } from 'next/router';

const data = [
    {
        sr: "1", subject_name: "General Studies", subject_description: "General Studies is an interdisciplinary field that encompasses various subjects such as history, social sciences, natural sciences, mathematics, and the arts. It aims to provide a broad understanding of the world and develop critical thinking skills by exploring diverse topics from different perspectives. Through analysis, research, and reflection, General Studies fosters a well-rounded education essential for informed citizenship and professional success.", Quiz: "quiz1"
    },
    {
        sr: "2", subject_name: "Computer Fundamentals", subject_description: "Computer fundamentals encompass the basic principles and components of computing systems, including hardware, software, and data. Understanding these fundamentals is crucial for tasks ranging from basic computer operation to complex programming and system management. It involves concepts such as binary arithmetic, operating systems, networking, and cybersecurity.", Quiz: "quiz2"
    },
    {
        sr: "3", subject_name: "Computer Network", subject_description: "A computer network is a system of interconnected computers and devices that communicate with each other. It enables data sharing, resource access, and communication between users. Networks can be local (LAN), wide (WAN), or global (Internet), facilitating various applications such as email, file sharing, and online browsing.", Quiz: "quiz3"
    },
    {
        sr: "4", subject_name: "Data Structures and Algorithms", subject_description: "Data structures are organizational methods used to store and manipulate data efficiently, like arrays, linked lists, and trees. Algorithms are step-by-step procedures for solving computational problems, such as sorting, searching, and graph traversal. Together, they form the backbone of computer science, enabling efficient data processing and problem-solving in software development.", Quiz: "quiz4"
    }
]
function Subject() {
    const router = useRouter();

    const handleQuiz = (e) => {
        let quizValue = e.target.value;
        router.push(`/quizs/${quizValue}`)
    };
    return (
        <>
            <div className="subject">
                <table className='table'>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Subject Name</th>
                        <th>Subject Description</th>
                        <th>Link</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <>
                                <tr key={key} className='tr'>
                                    <td>{val.sr}</td>
                                    <td>{val.subject_name}</td>
                                    <td>{val.subject_description}</td>

                                    <td><button style={{ marginLeft: "10px", marginRight: "10px" }} className='quizbutton' value={val.Quiz} onClick={handleQuiz}>{val.Quiz.toLocaleUpperCase()}</button></td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>
        </>
    );
}
export default Subject;





















































