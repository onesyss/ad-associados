import Link from 'next/link'
import AdminPesquisar from './AdminPesquisar'

export default function AdminMenu(props) {


    //alert(props.openMenu)

    return (
        <aside className="menu pl-3 pr-3">
            <p className="menu-label pt-3 px-3">
                {/* <span className="is-centered"><AdminPesquisar /></span> */}
            </p>
            <ul className="menu-list">
                <li><Link href="/admin"><a href="#"><i className="fab fa-contao"></i> Painel Administrativo</a></Link></li>
            </ul>
            <p className="menu-label">
                Administração
            </p>
            {/* <ul className="menu-list">
                <li>
                <a className="is-active has-background-primary">Home</a>
                    <ul>
                        <li><a href="#">Cadastrar</a></li>
                        <li><a href="#">Listar</a></li>
                    </ul>
                </li>
            </ul> */}
            <ul className="menu-list">
                <li>
                    <a className="is-active has-background-primary">Sobre</a>
                    <ul>
                        <li><Link href="/admin/cadastroSobre"><a href="#">Cadastrar</a></Link></li>
                        <li><Link href="/admin/listagemSobre"><a href="#">Listar</a></Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="menu-list">
                <li>
                    <a className="is-active has-background-primary">Serviços</a>
                    <ul>
                        <li><Link href="/admin/cadastroServico"><a href="#">Cadastrar</a></Link></li>
                        <li><Link href="/admin/listagemServico"><a href="#">Listar</a></Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="menu-list">
                <li>
                    <a className="is-active has-background-primary">Práticas Jurídicas</a>
                    <ul>
                        <li><Link href="/admin/cadastroPratica"><a href="#">Cadastrar</a></Link></li>
                        <li><Link href="/admin/listagemPratica"><a href="#">Listar</a></Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="menu-list">
                <li>
                    <a className="is-active has-background-primary">Notícias</a>
                    <ul>
                        <li><Link href="/admin/cadastroNoticia"><a href="#">Cadastrar</a></Link></li>
                        <li><Link href="/admin/listagemNoticia"><a href="#">Listar</a></Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="menu-list">
                <li>
                    <a className="is-active has-background-primary">Contato</a>
                    <ul>
                        <li><Link href="/admin/cadastroContato"><a href="#">Cadastrar</a></Link></li>
                        <li><Link href="/admin/listagemContato"><a href="#">Listar</a></Link></li>
                    </ul>
                </li>
            </ul>
        </aside>
    )
}