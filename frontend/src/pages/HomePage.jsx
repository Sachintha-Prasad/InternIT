import React from "react"
import Hero from "../components/Hero"
import InternList from "../components/IntenList"

const HomePage = () => {
    return (
        <div>
            <Hero />
            <InternList isHome={true} />
        </div>
    )
}

export default HomePage
