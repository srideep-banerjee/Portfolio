import "../styles/Home.css"
import "../styles/common.css"
import PanaromaText from "./PanaromaText"
import pfp from "../assets/pfp.jpg"

export default function Home() {
    return (
        <div className="home-container">
            <div className="appbar-adjusted-height home-front">
                <section>
                    <h3>Hello there,</h3>
                    <h1>I'm <span className="name">Srideep Banerjee</span></h1>
                    <h2>I'm a <PanaromaText/></h2>
                    <p>I am a fourth year Computer Science and Engineering student. I have a certificate of virtual internship in Android app development by AICTE EduSkills. I've built mobile apps using both native technologies and cross-platform technologies along with full stack web applications.</p>
                </section>
                <div className="pfp-container">
                    <img src={pfp} />
                </div>
            </div>
            <footer>
                <h1>Contact Me</h1>
                <div className="contacts-container">
                    <span className="contact-attribute">E-mail</span>
                    <span className="contact-value">banerjee.srideep@gmail.com</span>
                    <span className="contact-attribute">Phone</span>
                    <span className="contact-value">+91 7319264346</span>
                    <span className="contact-attribute">GitHub</span>
                    <span className="contact-value"><a href="https://github.com/srideep-banerjee">srideep-banerjee</a></span>
                    <span className="contact-attribute">LinkedIn</span>
                    <span className="contact-value"><a href="https://www.linkedin.com/in/srideep-banerjee/">srideep-banerjee</a></span>
                </div>
            </footer>
        </div>
    )
}
