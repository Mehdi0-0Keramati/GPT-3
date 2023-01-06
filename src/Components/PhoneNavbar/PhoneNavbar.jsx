import Styles from "./phonenavbar.module.css";
import classNames from "classnames";
import { useState } from "react";

function Navbar() {
    const [active, setactive] = useState(true)

    return (
        <div className={Styles.phoneNavbar}>
            <strong className={Styles.logo}>
                GPT-3
            </strong>
            <nav className={active ? Styles.navbar : Styles.activeNavbar}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">What is GPT?</a></li>
                    <li><a href="#">Open AI</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Library</a></li>
                    <button className={Styles.signin}>Sign in</button>
                    <button className={Styles.signup}>Sign up</button>
                </ul>
            </nav>
            <span onClick={() => setactive(!active)} className={Styles.navbaricon}>{active ? "☰" : "×"}</span>
        </div>
    )
}

export default Navbar