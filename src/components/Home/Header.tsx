import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledContainer = styled.div`
    .header-text {
        font-size: 50px;
        line-height: 56px;
    }

    .sub-text {
        font-size: 15px;
    }
`

// const StyledButton = styled.a``

export default function Header() {
    return (
        <StyledContainer className='bg-blue h-screen'>
            <div className='h-full items-center w-9/12 mx-auto  grid grid-cols-2'>
                <div className='texts'>
                    <div className='w-10/12'>
                        <h1 className='font-bold text-4xl header-text w-11/12 text-blackfade'>
                            Together, We can change the world
                        </h1>
                        <p className='text-xs pt-4 sub-text text-lighterblack'>
                            Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et,
                            porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est vitae dictum.
                        </p>
                        <div className='py-12 md:text-xs lg:text-xs sm:text-sm font-medium'>
                            <Link href='/'>
                                <a className='py-3 px-6 border-solid border border-green duration-300 rounded text-white bg-green hover:bg-green'>
                                    Subscribe
                                </a>
                            </Link>
                            <Link href='/'>
                                <a className='mx-8 border-b-2 pb-1 duration-300 hover:text-green'>Learn More</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className=''>
                        <img className='' src='/img/rectangle9.png' alt='rectangle9' />
                        <img className='' src='/img/annie.png' alt='annie' />
                    </div>
                    <div className='mx-2'>
                        <img className='h-56' src='/img/pexel.png' alt='pexel' />
                    </div>
                    <div className='flex'>
                        <div className=''>
                            <img className='' src='/img/eber.png' alt='eber' />
                            <img className='' src='/img/rahman.png' alt='rahman' />
                        </div>

                        <div>
                            <img className='' src='/img/rectangle16.png' alt='rectangle16' />
                        </div>
                    </div>

                    <div>
                        <img className='' src='/img/rectangle11.png' alt='rectangle11' />
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}
