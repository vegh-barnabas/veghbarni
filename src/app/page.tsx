import Image from 'next/image'
import styles from './page.module.css'
import 'animate.css';
import Navbar from './components/navbar/navbar';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="content animate__animated animate__fadeIn">
        {/*  todo align this h1 to center and add confetti effect on hover */}
        <h1>Welcome to my page!</h1>
        <p>
          Here, you can access my personal resources as well as the lectures for
          the current year. If you come across any errors, please reach out to
          me in the email address provided on the Contacts page.
        </p>
      </div>
    </>
  )
}
