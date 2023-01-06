import Styles from "./Blog.module.css";
function Blog() {
    return (
        <>
            <h1 className={Styles.title}>A lot is happening,
                We are blogging about it.</h1>
            <div className={Styles.container}>
                <div className={Styles.box}>
                    <img src={require("../../assets/images/blog01.png")} alt="blog" />
                    <div className={Styles.text}>
                        <span>Sep 26, 2021  </span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>Read Full Article</p>
                    </div>
                </div>

                <div className={Styles.box}>
                    <img src={require("../../assets/images/blog02.png")} alt="blog" />
                    <div className={Styles.text}>
                        <span>Sep 26, 2021  </span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>Read Full Article</p>
                    </div>
                </div>

                <div className={Styles.box}>
                    <img src={require("../../assets/images/blog03.png")} alt="blog" />
                    <div className={Styles.text}>
                        <span>Sep 26, 2021  </span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>Read Full Article</p>
                    </div>
                </div>

                <div className={Styles.box}>
                    <img src={require("../../assets/images/blog04.png")} alt="blog" />
                    <div className={Styles.text}>
                        <span>Sep 26, 2021  </span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>Read Full Article</p>
                    </div>
                </div>

                <div className={Styles.box}>
                    <img src={require("../../assets/images/blog05.png")} alt="blog" />
                    <div className={Styles.text}>
                        <span>Sep 26, 2021  </span>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>Read Full Article</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Blog