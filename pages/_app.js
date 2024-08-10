import "@/styles/globals.css";
import Link from "next/link";
import Footer from "./footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link href="/" className="navigationhome">Home </Link>
        <Link href="/subject" className="navigationsubject">Subjects </Link>
        <Link href="/quiz" className="navigationquiz">Quiz </Link>
        <Link href="/about" className="navigationabout">About </Link>
        <Link href="/contact" className="navigationcontact">Contact </Link>
      </div>
    </>
  );
};






