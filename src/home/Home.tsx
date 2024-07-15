import "../styles/Home.css"
import PanaromaText from "./PanaromaText"

export default function Home() {
    return (
        <div className="home-container">
            <h2>Hello there,</h2>
            <h1>I'm <span className="name">Srideep Banerjee</span></h1>
            <h2>I'm a <PanaromaText /></h2>
        </div>
    )
}
