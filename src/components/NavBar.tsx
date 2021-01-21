import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import colors from '../utils/colors'

const StyledLink = styled.a`
    position: relative;
    cursor: pointer;
    height: 100%;
    padding-bottom: 1.8rem;
    padding-top: 1rem;

    &:hover {
        color: ${colors.green};
        &:after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            height: 3px;
            animation: expand 300ms linear 1 normal both;
            background-color: ${colors.green};
            border-radius: 10px;
            text-align: center;
        }
    }
`

const StyledDiv = styled.div`
    z-index: 999;
    box-shadow: 0px 3px 50px #17a0991a;
`

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <StyledDiv className='bg-white w-full fixed top-0 py-6 md:py-4'>
            <div className='w-10/12 mx-auto md:flex items-center justify-between h-full'>
                <div className='md:w-auto w-full flex items-center justify-between'>
                    <img className='w-32 h-auto' src='/img/logo.png' alt='logo' />
                    <div className='md:hidden block'>
                        {!isNavOpen ? (
                            <div onClick={() => setIsNavOpen(true)}>
                                <div className='w-8 h-1 rounded-lg bg-green mb-1'></div>
                                <div className='w-8 h-1 rounded-lg bg-green mb-1'></div>
                                <div className='w-8 h-1 rounded-lg bg-green'></div>
                            </div>
                        ) : (
                            <div onClick={() => setIsNavOpen(false)}>
                                <p className='text-4xl text-green '>&times;</p>
                            </div>
                        )}
                    </div>
                </div>
                <nav
                    className={`md:text-xs lg:text-sm sm:text-sm font-semibold ${
                        isNavOpen ? 'flex flex-col mt-6' : 'hidden md:block'
                    }`}
                >
                    <Link href='/whoweare'>
                        <StyledLink className='mx-2 md:mx-5 duration-300 '>Who we are</StyledLink>
                    </Link>

                    <Link href='/howitworks'>
                        <StyledLink className='mx-2 md:mx-5 duration-300'>How it Works</StyledLink>
                    </Link>

                    <Link href='/contact-us'>
                        <StyledLink className='mx-2 md:mx-5 duration-300'>Contact Us</StyledLink>
                    </Link>
                </nav>

                <div
                    className={`md:text-xs lg:text-sm sm:text-sm font-semibold text-green ${
                        isNavOpen ? 'flex flex-col mr-10' : 'hidden md:block'
                    }`}
                >
                    <Link href='/login'>
                        <a className='px-2 md:px-6 mt-4'>Log in</a>
                    </Link>
                    <Link href='/signup'>
                        <a className='px-2 mt-10 w-24 md:px-5 py-2 border-solid border border-green duration-300 rounded bg-transparent hover:bg-green hover:text-white'>
                            Sign Up
                        </a>
                    </Link>
                </div>
            </div>
        </StyledDiv>
    )
}

export default NavBar
