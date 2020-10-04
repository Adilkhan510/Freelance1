import React from 'react'
import { InfoSection } from '../../components'
import { home1, home2 } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...home1} />
            <InfoSection {...home2} />
            <InfoSection {...home1} />
        </>
    )
}

export default Home
