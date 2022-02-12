import Link from 'next/link'

export default function Header({ children }) {

    const mobileMenuClick = (event) => {
        event.preventDefault();
        event.target.classList.toggle("active")
        document.querySelector('html').classList.toggle('opened')
        document.querySelector(".site-navigation").classList.toggle("active");
    };


    return (
        <div className="site-header flex-1">
            <Link href="/">
                <a className="site-logo mr-1" href="index.html">
                    <img src="assets/images/logo.svg" alt="4Decision" />
                </a>
            </Link>
            <div className="site-navigation flex-1">
                <ul className="site-menu flex-1">
                    <li>
                        <Link href="/presta-shop">4Decision for PrestaShop</Link>
                    </li>
                    <li>
                        <Link href="/product">4Decision for your product</Link>
                    </li>
                    <li>
                        <Link href="/about">About us</Link>
                    </li>
                </ul>
                <div className="account flex-1">
                    <a className="btn btn-muted" href="index.html">Log In</a>
                    <a className="btn btn-border" href="index.html">Create a New Account</a>
                </div>
            </div>
            <a className="mobile-menu-icon d-md-none" href="#" onClick={mobileMenuClick} />
        </div>
    )
}