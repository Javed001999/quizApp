import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <title>QuizEasy App</title>
      <div className="home">
        <h1 style={{color:"yellow"}}>QuizEasy App</h1>
        <p className="homedescription" style={{marginTop:"10px"}}>
        Welcome to QuizEasy - your ultimate destination for fun and challenging quizzes! Dive into a world of knowledge and entertainment right from the comfort of your home with our user-friendly app interface.
        Explore an extensive range of categories catering to every interest, from general science, computer fundamentals and web developement. Whether you're a trivia enthusiast or a casual player, there's something for everyone.
        </p>
      </div>
      <h1 style={{ color: "yellow", textAlign: "center", marginTop: "15px" }}>Prepare By Topics</h1>

      <div class="myDiv1">
        {/* <Link href="https://www.google.com/"> <h1 className='html'>HTML</h1> </Link> */}
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
    </>
  );
};




















