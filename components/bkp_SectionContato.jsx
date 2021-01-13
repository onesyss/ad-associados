export default function SectionContato(props) {
    return (
        <section>
            <section className="hero is-medium is-bold img-full-insise-contact">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-grey">
                            Contato
                        </h1>
                        <p className="subtitle is-size-5 is-size-7-mobile has-text-grey">
                            Obteinha todas as Informações, de que precisa com nossoco
                        </p>
                        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                            <ul className="has-text-centered">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Práticas Jurídicas</a></li>
                                <li><a href="#">Notícias</a></li>
                                <li><a href="#" className="is-active" aria-current="page">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="section" data-animate="right">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-1 has-text-centered">Contato</h1>
                            <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">Estamos sempre dispostos a lhe ajudar</h2>
                            <p className="is-size-6 has-text-centered">
                                Assuntos jurídicos são coisa muito séria, não deixe suas dúvidas ficarem lhe consumindo.. entre em contato, teremos grande prazer em atende-lo(a).
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-medium" type="name" name="name" placeholder="Nome Completo" />
                                    <span className="icon is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <span className="icon is-right">
                                        <i className="fas fa-check fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-medium" type="email" name="email" placeholder="E-mail" />
                                    <span className="icon is-left">
                                        <i className="fas fa-at"></i>
                                    </span>
                                    <span className="icon is-right">
                                        <i className="fas fa-check fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-medium" type="phone" name="phone" placeholder="Telefone com DDD" />
                                    <span className="icon is-left">
                                        <i className="fas fa-phone-alt"></i>
                                    </span>
                                    <span className="icon is-right">
                                        <i className="fas fa-check fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <textarea className="textarea pt-5" type="textarea" name="textarea" placeholder="Menssagem"></textarea>
                                    <span className="icon is-left">
                                        <i className="fas fa-envelope fa-sm"></i>
                                    </span>
                                    <span className="icon is-right">
                                        <i className="fas fa-check fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-primary">Enviar</button>
                                </div>
                                <div className="control">
                                    <button className="button is-primary is-light">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero" data-animate="left">
                <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3950.007997219786!2d-34.88823108484289!3d-8.100665494168139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1594118013977!5m2!1spt-BR!2sbr"></iframe>
            </section>
            <section className="container">
                <div className="columns">
                    <div className="column">Google Maps</div>
                    <div className="column">Informações de contato</div>
                    <div className="column">Informações de contato telefones etc..</div>
                </div>
            </section>
        </section>
    )
}