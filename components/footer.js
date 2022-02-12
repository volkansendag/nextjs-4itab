import Link from 'next/link'

export default function Footer({ children }) {

    return (
        <footer className="site-footer border-top">
            <div className="container">
                <div className="p-4 grid grid-col-4 grid-gap-4">
                    <div className="col">
                        <span>© 2022 4IT AB.</span>
                    </div>
                    <div className="col">
                        <h5 className="mb-2">Get in Touch</h5>
                        <ul className="grid grid-gap-0">
                            <li><address>IDEON Science Park<br />Scheelevägen 17<br />223 70 Lund,Sweden</address></li>
                            <li><a href="#">info@4itab.com</a></li>
                            <li><a href="#">+46(0)46 286 48 00</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="mb-2">Products</h5>
                        <ul className="grid grid-gap-0">
                            <li><a href="#">4Decision for PrestaShop</a></li>
                            <li><a href="#">4Decision for your product</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="mb-2">Learn More</h5>
                        <ul className="grid grid-gap-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}
        </Layout>
    )
}