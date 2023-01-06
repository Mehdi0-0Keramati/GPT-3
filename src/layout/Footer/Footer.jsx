import Styles from "./footer.module.css";

function Footer() {
    return (
        <footer>
            <h1>Do you want to step in to the future before others</h1>
            <button>Request Early Access</button>
            <div className={Styles.container}>
                <div>
                    <h2>GPT-3</h2>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div>
                    <strong>Links</strong>
                    <ul>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <strong>Company</strong>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <strong>Get in touch</strong>
                    <ul>
                        <li>Crechterwoord K12 182 DK Alknjkcb</li>
                        <li>990--- -- --</li>
                        <li>mtiQ@gmail.com</li>
                    </ul>
                </div>
            </div>

            <strong>© 2021 GPT-3. All rights reserved.</strong>
        </footer>
    )
}

export default Footer