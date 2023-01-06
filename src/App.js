import "./app.css";
import { CTA, Brands } from "./Components"
import { Header, Blog, Feature, Footer, WhatGPT3 } from "./layout"
function App() {
    return (
        <>
            <Header />
            <Brands />
            <WhatGPT3 />
            <Feature />
            <CTA />
            <Blog />
            <Footer />
        </>
    )
}

export default App