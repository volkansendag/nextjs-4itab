import Head from 'next/head'
import Footer from './footer'
import Header from './header'

export default function Layout({ children, showIntro }) {

    return (
        <div className="site-container">
            <Head>
                <title>4Decision</title>
                <meta name="description" content="Generated by volkansendag" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="intro bg">
                <div className="container">
                    <Header></Header>
                    {showIntro ?
                        <div className="intro-content grid grid-col-2">
                            <div className="px grid-align-center">
                                <div className="mb-2">
                                    <h1>Get full <span>control</span> over your sales statistics</h1>
                                </div>
                                <div className="mb-4">
                                    <p>4Decision is a powerful reporting tool with a ready-made integration with PrestaShop. Every night data from your shop will be fetched automatically and prepared for reporting and analytics.</p>
                                </div>
                                <div className="d-block">
                                    <a className="btn mb-2" href="index.html">Get started free</a>
                                    <div className="grid grid-gap-0 text-muted text-sm">
                                        <span className="flex-1 icon-check">Free 3 months trial</span>
                                        <span className="flex-1 icon-check">No credit card required</span>
                                    </div>
                                </div>
                            </div>
                            <div className="image grid-align-end grid-justify-center">
                                <img className="img-opacity" src="assets/images/intro.jpg" />
                            </div>
                        </div> : null
                    }
                </div>
            </section>
            <main className="content">
                {children}
            </main>
            <Footer></Footer>

        </div>
    )
}
