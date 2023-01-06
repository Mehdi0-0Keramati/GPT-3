import Styles from "./brands.module.css";

function Brands() {
    return (
        <div className={Styles.container}>
            <img src={require("../../assets/images/google.png")} alt="google" />
            <img src={require("../../assets/images/slack.png")} alt="slack" />
            <img src={require("../../assets/images/atlassian.png")} alt="atlassian" />
            <img src={require("../../assets/images/dropbox.png")} alt="dropbox" />
            <img src={require("../../assets/images/shopify.png")} alt="shopify" />
        </div>
    )
}

export default Brands