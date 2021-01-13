import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import SectionNoticia from './SectionNoticia'
import SectionNoticiaHome from './SectionNoticiaHome'

export default function PageNoticias() {

    const [listNews, setListNews] = useState([])

    useEffect(
        () => {
            async function loadingNews() {

                //fazendo conexão com a API e BANCO DE DADOS
                //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
                const response = await axios.get(URL_API + '/news')
                
                // console.log(response.data)
                
                setListNews(response.data)

            }

            loadingNews()
        }
        , [])


    return (
        <section className="noticias" data-animate="bottom">

            <section className="hero is-medium is-bold img-full-insise bg-cover">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-white">
                            Notícias
                        </h1>
                        <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
                            Fique por dentro de tudo que acontece no mundo Jurídico
                        </p>
                        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Práticas Jurídicas</a></li>
                                <li><a href="#" className="is-active" aria-current="page">Notícias</a></li>
                                <li><a href="#">Contato</a></li>
                                <li><Link href="/noticiasInterna"><a href="#">Interna de notícias</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="section" data-animate="bottom">
                <div className="container">
                    <div className="column">
                        <h1 className="is-size-1 has-text-centered">Notícias</h1>
                        <h2 className="is-size-5 has-text-centered">Práticas Jurídicas | Estudos de casos</h2>
                    </div>
                </div>
            </section>
            <section className="section" data-animate="bottom">
                {
                    listNews.map(
                        item => {
                            if (!item.showingoff) return null
                            return (
                                <SectionNoticia {...item} key={'news' + item.id} />
                            )
                        }
                    )
                }
            </section>
            {/* <section className="section" data-animate="top">
                {
                    listNews.map(
                        item => {
                            if (!item.showingoff) return null
                            return (
                                <SectionNoticiaHome {...item} key={'home' + item.id} />
                            )
                        }
                    )
                }
            </section> */}
            {/* <section className="hero" data-animate="top">
                <div className="container-image">
                    <div className="texto-image">
                        <h1>Gustavo Teste de Utilização</h1>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. </p>
                    </div>
                </div>
            </section> */}
            {/* <section className="section">
                <div className="container is-light">
                    <div className="columns">
                        <div className="column">1</div>
                        <div className="column">2</div>
                        <div className="column">3</div>
                    </div>
                </div>
            </section> */}

        </section>
    )
}