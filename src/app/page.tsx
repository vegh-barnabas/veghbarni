import "animate.css";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="content animate__animated animate__fadeIn">
        {/*  todo align this h1 to center and add confetti effect on hover */}
        <h1>Welcome to my page!</h1>
        <p>
          Here, you can access my personal resources as well as the lectures for
          the current year.
        </p>
        <p>
          If you come across any errors, please reach out to me in the email
          address provided on the <Link href="/contact">Contact</Link> page.
        </p>
      </div>
    </>
  );
}
