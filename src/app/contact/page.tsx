import Navbar from '../components/navbar/navbar';

import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Contact() {
    return (
        <>
            <Navbar></Navbar>
            <div className="content animate__animated animate__fadeIn">
                <p>
                    <BsLinkedin /> LinkedIn:{' '}
                    <a href="https://www.linkedin.com/in/vegh-barnabas">vegh-barnabas</a>
                </p>
                <p>
                    <BsGithub /> Github:{' '}
                    <a href="https://github.com/vegh-barnabas">vegh-barnabas</a>
                </p>
            </div>
        </>
    );
}
