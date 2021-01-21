import Head from 'next/head'
import Link from 'next/link'
import FundRaise from '../src/components/FundRaiseCards'
import colors from '../src/utils/colors'
import Toggle from '../src/components/Toggle'
import Slider from '../src/components/Slider'
import Card from '../src/components/Card'
import Header from '../src/components/Home/Header'

function Home() {
    return (
        <div>
            <Header />
            <div className='my-32'>
                <img src='/img/line.png' alt='/' />
            </div>
            <div className='mx-48 grid grid-cols-2'>
                <div className='-mt-24'>
                    <h1 className='font-bold text-2xl'>
                        Join thousands of
                        <br /> people just like you,
                        <br /> in making a difference.
                    </h1>
                    <div className='my-12 shadow-lg rounded-3xl w-auto h-32'>
                        <div className='flex mt-8'>
                            <img className='mx-4 w-6 mt-8' src='/img/checkmark.png' alt='checkmark' />
                            <h1 className='ml-6 font-medium mt-8'>Create an account</h1>
                        </div>
                        <p className='text-xs ml-20 my-4'>
                            Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et,
                            porta ut dolor.
                        </p>
                        <Link href='/'>
                            <a className='py-3 px-6  ml-20 border-solid border border-green duration-300 rounded  text-sm text-white bg-green hover:bg-green'>
                                Subscribe Now
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='-mt-40 ml-40'>
                    <img className='w-full' src='/img/phone.png' alt='phone' />
                </div>
            </div>
            <div className='my-32'>
                <img src='/img/line.png' alt='/' />
            </div>
            <div className='mx-48 grid grid-cols-2'>
                <div className='mt-16'>
                    <h1 className='font-bold text-2xl'>
                        Campaigns
                        <br /> We helped with
                    </h1>
                    <p className='mt-8 text-xs'>
                        Fusce at nisi eget dolor rhoncus facilisis. Mauris
                        <br /> ante nisl, consectetur et luctus et, porta ut dolor.
                    </p>
                    <div className='my-8'>
                        <Link href='/'>
                            <a className='border-b-2 pb-1 duration-300 text-xs font-medium hover:text-green'>
                                Explore More Campaigns
                            </a>
                        </Link>
                    </div>
                    <Toggle />
                </div>
                <div className=' ml-40'>
                    <FundRaise />
                </div>
            </div>
            <div className='my-32'>
                <img src='/img/line.png' alt='/' />
            </div>
            <div className='mx-48 grid grid-cols-2'>
                <div className='mt-16'>
                    <div className='flex mr-12'>
                        <div className=''>
                            <img className='' src='/img/rectangle9.png' alt='rectangle9' />
                            <img className='' src='/img/annie.png' alt='annie' />
                        </div>
                        <div className=''>
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
                <div>
                    <h1 className='font-bold text-2xl'>What we have done with your donations</h1>
                    <p className='text-xs mt-4'>
                        fusce et misi eget dolor rhoncus fasisilis mauris ante nisi,
                        <br />
                        consectatur et luctus et purta ut dolor.
                    </p>
                    <div className='flex mt-6'>
                        <div className=''>
                            <p className='text-xs'>Donated</p>
                            <p className='font-semibold text-lg mt-2 border-b-2 border-red w-5'>$300,000</p>
                        </div>
                        <div className='ml-40'>
                            <p className='text-xs'>Countries reached</p>
                            <p className='font-semibold text-lg mt-2  border-b-2 border-yellow w-5'>25</p>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <p className='text-xs'>People who have benefited</p>
                        <p className='font-semibold text-lg mt-2  border-b-2 border-green w-5'>5000</p>
                    </div>
                    <div className='flex items-center mt-12 text-xs'>
                        <p>We can do more with your help.</p>
                        <Link href='/'>
                            <a className='py-3 px-6 ml-8 border-solid border border-green duration-300 rounded text-white bg-green hover:bg-green'>
                                Subscribe Now
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='my-32'>
                <img src='/img/line.png' alt='/' />
            </div>

            <div className=''>
                <div className='mt-6 ml-40'>
                    <h1 className='font-bold text-2xl'>What they say about us</h1>
                    <p className='mt-8 text-xs'>
                        Fusce at nisi eget dolor rhoncus facilisis. Mauris
                        <br /> ante nisl, consectetur et luctus et, porta ut dolor.
                    </p>
                </div>
                <div className='mt-56'>
                    <Slider />
                </div>
            </div>
            <div className='my-20'>
                <img src='/img/line.png' alt='/' />
            </div>

            <div className=''>
                <div className='text-center'>
                    <h1 className='font-bold text-2xl'>Follow the latest news & articles</h1>
                    <p className='mt-4 text-xs'>
                        Fusce at nisi eget dolor rhoncus facilisis. Mauris
                        <br /> ante nisl, consectetur et luctus et, porta ut dolor.
                    </p>
                </div>
                <div className=' my-16 mx-40'>
                    <Card />
                </div>
            </div>
            <div className='mt-40'>
                <div className='mt-6 ml-40'>
                    <h1 className='font-bold text-2xl '>NGOs that endorse us</h1>
                    <p className='mt-4 text-xs'>
                        Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut
                        dolor.
                    </p>
                </div>
                <div className='flex ml-56 mt-12'>
                    <img className='w-20 h-auto ml-24' src='/img/speakupafrica.png' alt='/' />
                    <img className='w-20 h-auto ml-24' src='/img/globalgiving.png' alt='/' />
                    <img className='w-20 h-auto ml-24' src='/img/gofundme.png' alt='/' />
                    <img className='w-20 h-auto ml-24' src='/img/helpinghandsfund.png' alt='/' />
                </div>
            </div>
            <div className='my-32 bg-blue'>
                <div className='text-center'>
                    <h1 className='font-bold text-2xl'>Meet the Team</h1>
                    <p className='mt-4 text-xs'>
                        Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut
                        dolor.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
