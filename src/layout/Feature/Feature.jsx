import Styles from "./feature.module.css";

function Feature() {
    return (
        <section className={Styles.container}>

            <div className={Styles.top}>

                <div className={Styles.left}>
                    <h2>
                        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                    </h2>
                    <p>Request Early Access to Get Started</p>
                </div>

                <div className={Styles.right}>

                    <div className={Styles.row}>
                        <h3>Improving end distrusts instantly </h3>
                        <p>
                            From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.
                        </p>
                    </div>

                    <div className={Styles.row}>
                        <h3>Become the tended active </h3>
                        <p>
                            Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
                        </p>
                    </div>

                    <div className={Styles.row}>
                        <h3>Message or am nothing </h3>
                        <p>
                            Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
                        </p>
                    </div>

                    <div className={Styles.row}>
                        <h3>Really boy law county </h3>
                        <p>
                            Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
                        </p>
                    </div>

                </div>

            </div>

            <div className={Styles.bottom}>
                <div className={Styles.left}>
                    <img src={require('../../assets/images/possibility.png')} alt="woman" />
                </div>
                <div className={Styles.right}>
                    <h5>Request Early Access to Get Started</h5>
                    <h2>The possibilities are beyond your imagination</h2>
                    <p>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <strong>Request Early Access to Get Started</strong>
                </div>
            </div>
        </section>
    )
}

export default Feature