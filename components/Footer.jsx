import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer bg-footer">
            <div className="container has-text-left-desktop has-text-left-mobile has-text-white">
                <p><strong></strong></p>
                <div className="columns">
                    <div className="column">
                        <h5 className="has-text-weight-bold pb-5 is-size-5">Empresa</h5>
                        <p className="has-text-white">Durante nosso ano  de trabalho, reunimos uma equipe de especialistas dedicados, com vasta experiência em ajuda jurídica.</p>
                        <span className=""><img src="/assets/images/logo-advogados-associados.svg" alt="Logo" width="70%" /></span>
                    </div>
                    <div className="column">
                        <h5 className="has-text-weight-bold pb-5 is-size-5">Links Rápidos</h5>
                        <ul className="menu-list">
                            <li><Link href="/"><a href="#" className="has-text-white" alt="Rodapé Home"><span className="pr-3"><i className="fas fa-caret-right"></i></span> Home</a></Link></li>
                            <li><Link href="/sobre"><a href="#" className="has-text-white" alt="Rodapé Sobre"><span className="pr-3"><i className="fas fa-caret-right"></i></span> Sobre</a></Link></li>
                            <li><Link href="/servicos"><a href="#" className="has-text-white" alt="Rodapé Serviços"><span className="pr-3"><i className="fas fa-caret-right"></i></span> Serviços</a></Link></li>
                            <li><Link href="/praticas"><a href="#" className="has-text-white" alt="Rodapé Práticas Jurídicas"><span className="pr-3"><i className="fas fa-caret-right"></i></span> Práticas Jurídicas</a></Link></li>
                            <li><Link href="/noticias"><a href="#" className="has-text-white" alt="Rodapé Notícias"><span className="pr-3"><i className="fas fa-caret-right"></i></span> Notícias</a></Link></li>
                            <li><Link href="/contato"><a href="#" className="has-text-white" alt="Rodapé Contato"><span className="pr-3"><i className="fas fa-caret-right"></i></span> Contato</a></Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5 className="has-text-weight-bold pb-5 is-size-5">Redes Sociais</h5>
                        <ul className="menu-list">
                            <li><a href="http://www.linkedin.com" className="has-text-white" alt="Redes Sociais Linkedin"><span className="pr-3"><i className="fab fa-linkedin-in"></i></span> Linkedin</a></li>
                            <li><a href="http://www.twitter.com" className="has-text-white" alt="Redes Sociais Twitter"><span className="pr-3"><i className="fab fa-twitter"></i></span> Twitter</a></li>
                            <li><a href="http://www.facebook.com" className="has-text-white" alt="Redes Sociais Facebook"><span className="pr-3"><i className="fab fa-facebook-f"></i></span> Facebook</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5 className="has-text-weight-bold pb-5 is-size-5">Contato</h5>
                        <ul className="menu-list">
                            <li><Link href="/contato"><a href="#" className="has-text-white" alt="Rodapé Endereço"><span className="pr-3"><i className="fas fa-map-marker-alt"></i></span> Endereço: Rua Amazonas, 315 <br /> Boa Viagem, Recife-PE</a></Link></li>
                            <li><Link href="/contato"><a href="#" className="has-text-white" alt="Rodapé Telefone"><span className="pr-3"><i className="fas fa-phone-alt"></i></span> Telefone: 81 34654523</a></Link></li>
                            <li><Link href="/contato"><a href="#" className="has-text-white" alt="Rodapé Horário"><span className="pr-3"><i className="fas fa-clock"></i></span> Horário: seg a sex 8h às 18h</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="columns has-text-centered has-text-centered-mobile">
                    <div className="column">
                        <h6 className="is-size-6 has-text-weight-bold px-2 py-2">Direitos Reservados ©2020</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}