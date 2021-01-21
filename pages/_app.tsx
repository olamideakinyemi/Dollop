import '../styles/globals.css'
import '../src/assets/main.css'
import DefaultLayout from '../src/layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || DefaultLayout

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
