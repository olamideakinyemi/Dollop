import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function ({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
