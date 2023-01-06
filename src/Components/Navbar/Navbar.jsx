import { useState } from "react";
import Styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <ul>
                <strong>
                    <a className={Styles.logo} href="#">GPT-3</a>
                </strong>
                <li><a href="#">Home</a></li>
                <li><a href="#">What is GPT?</a></li>
                <li><a href="#">Open AI</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Library</a></li>
            </ul>
            <div className={Styles.contact}>
                <button className={Styles.signin}>Sign in</button>
                <button className={Styles.signup}>Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar