import "../styles/Home.css"
import PanaromaText from "./PanaromaText"
import pfp from "../assets/pfp.jpg"

export default function Home() {
    return (
        <div className="home-container">
            <section>
                <h3>Hello there,</h3>
                <h1>I'm <span className="name">Srideep Banerjee</span></h1>
                <h2>I'm a <PanaromaText /></h2>
                <p>I am a fourth year Computer Science and Engineering student. I have a certificate of virtual internship in Android app development by AICTE EduSkills. I've built mobile apps using both native technologies and cross-platform technologies along with full stack web applications.</p>
            </section>
            <div className="pfp-container">
                <img src={pfp}></img>
            </div>
        </div>
    )
}
