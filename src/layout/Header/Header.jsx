import { Navbar } from "../../Components";
import { PhoneNavbar } from "../../Components";
import Styles from "./header.module.css";

function Header() {
    return (
        <section className={Styles.container}>
            <div className={Styles.navbar}>
                {
                    window.screen.width > 834 ?
                        <Navbar />
                        :
                        <PhoneNavbar />
                }
            </div>
            <div className={Styles.header}>
                <div className={Styles.left}>
                    <h1>
                        Let’s Build Something
                        amazing with GPT-3
                        OpenAI
                    </h1>
                    <p>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <form>
                        <input type="email" id="email" placeholder="Your Email Address" />
                        <button>Get Started</button>
                    </form>

                    <div className={Styles.people}>
                        <img src={require('../../assets/images/people.png')} alt="people" />
                        <span>1,600 people requested access a visit in last 24 hours</span>
                    </div>

                </div>
                <div className={Styles.right}>
                    <img src={require('../../assets/images/ai.png')} alt="ai" />
                </div>
            </div>
        </section>
    )
}

export default Header