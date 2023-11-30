import "animate.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import Navbar from "../components/navbar/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="content animate__animated animate__fadeIn">
        <p>
          <BsLinkedin /> LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/vegh-barnabas" target="_blank">
            vegh-barnabas
          </a>
        </p>
        <p>
          <BsGithub /> Github:{" "}
          <a href="https://github.com/vegh-barnabas" target="_blank">
            vegh-barnabas
          </a>
        </p>
      </div>
    </>
  );
}
