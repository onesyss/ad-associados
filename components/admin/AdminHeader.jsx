import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import Head from 'next/head'
import Link from 'next/link'

export default function AdminHeader(props) {

    return (
        <header>
            <nav className="navbar box-shadown-y is-fixed-top" role="navigation" aria-label="main navigation">
                {/* <div className="navbar-item">
                    <Link href="/admin"><a href="#"><i className="fas fa-angle-left"></i> Voltar</a></Link>
                </div> */}
                <div className="navbar-brand">
                    <Link href="/admin">
                        <a className="navbar-item" href="#">
                            <img src="../../assets/images/logo-advogados-associados.svg" width="112" height="28" />
                        </a>
                    </Link>
                    <a role="button" onClick={ props.toggleMenu } className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-target">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar-target" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown">
                            <a className="navbar-link">
                                Configurações
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-link">
                                    Perfil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}