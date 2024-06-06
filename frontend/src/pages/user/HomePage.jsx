import React from 'react'
import InternList from '../../components/InternList'
import Hero from '../../components/Hero'

const Homepage = () => {
    return (
        <>
            <Hero
                title={'Empower Your Future with Top IT Internships'}
                subTitle={
                    'Connect with top companies and start your journey in technology.'
                }
            />
            <InternList />
        </>
    )
}

export default Homepage
