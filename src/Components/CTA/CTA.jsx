import Styles from "./CTA.module.css";

function CTA() {
    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <span>Request Early Access to Get Started</span>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <button>Get Started</button>
        </div>
    )
}

export default CTA