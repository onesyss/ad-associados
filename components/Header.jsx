import Link from 'next/link'
import { useState } from 'react'

export default function Header(){

    const [openMenu, setOpenMenu] = useState(false)

    function onButtonClick(e) {
        e.preventDefault()
        setOpenMenu(!openMenu)
    }

    return (
        <header>
            <section className="hero" id="social-midia">
                <div className="hero-head bg-level">
                    <div className="container">
                        <nav className="level px-3 py-3">
                            <div className="level-left has-text-white-bis">
                                <p className="level-item"><Link href="/contato"><a href="#" className="link has-text-white-bis"><span><i className="fas fa-phone-alt"></i></span> 81 992185304</a></Link></p>
                                <p className="level-item"><Link href="/contato"><a href="#" className="link has-text-white-bis"><span><i className="fas fa-at"></i></span> gustavocgsg@gmail.com</a></Link></p>
                                <p className="level-item"><Link href="/contato"><a href="#" className="link has-text-white-bis"><span><i className="fas fa-map-marker-alt"></i></span> Google Maps</a></Link></p>
                            </div>
                            <div className="level-right has-text-white-bis">
                                <p className="level-item"><a href="http://www.linkedin.com" className="link has-text-white-bis"><i className="fab fa-linkedin-in"></i></a></p>
                                <p className="level-item"><a href="http://www.twitter.com" className="link has-text-white-bis"><i className="fab fa-twitter"></i></a></p>
                                <p className="level-item"><a href="http://www.facebook.com" className="link has-text-white-bis"><i className="fab fa-facebook-f"></i></a></p>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="hero">
                <div className="hero-head has-background-white-bis">
                    <div className="container">
                        <nav className="navbar" role="navegation" aria-label="main navigation">
                            <div className="navbar-brand">
                                <Link href="/">
                                    <a href="#" alt="Menu Home">
                                        <img src="../assets/images/logo-advogados-associados.svg" alt="Logo Advogados Associados" width="100%" />
                                    </a>
                                </Link>
                                <a  href="#" role="Menu Hamburguer" onClick={onButtonClick} className="navbar-burger" data-target="navMenu" area-label="menu" aria-expanded="false">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                            <div className={'navbar-menu' + (openMenu ? ' is-active' : '')} id="navbar-menu-site">
                                <div className="navbar-start px-5">
                                    <Link href="/"><a href="#" className="navbar-item is-active" alt="Menu Home">Home</a></Link>
                                    <Link href="/sobre"><a href="#" className="navbar-item" alt="Menu Sobre">Sobre</a></Link>
                                    <Link href="/servicos"><a href="#" className="navbar-item" alt="Menu Serviços">Serviços</a></Link>
                                    <Link href="/praticas"><a href="#" className="navbar-item" alt="Menu Práticas Jurídicas">Práticas Jurídicas</a></Link>
                                    <Link href="/noticias"><a href="#" className="navbar-item" alt="Menu Notícias">Notícias</a></Link>
                                    <Link href="/contato"><a href="#" className="navbar-item" alt="Menu Contato">Contato</a></Link>
                                </div>
                                <div className="navbar-end">
                                    <Link href="/login"><a href="#" className="navbar-item" alt="Menu Contato"><button className="button is-primary"><span className="px-3"><i className="fas fa-user-lock"></i></span>Restrito</button></a></Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    )
}