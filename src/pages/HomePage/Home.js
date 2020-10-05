import React from 'react'
import { InfoSection, PastWork } from '../../components'
import { home1, home2 } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...home1} />
            <PastWork />
        </>
    )
}

export default Home
