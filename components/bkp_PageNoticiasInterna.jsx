import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PageNoticiasInterna(props) {

    const [data, setData] = useState({})

    const router = useRouter()

        //useEffect é uma forma de execultar uma função chamando uma unica vez, após a renderização de um componente
        useEffect(
            () => {
                loadingNotices()
            }, []
        )
    
        async function loadingNotices(){
    
            //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
            const response = await axios.get(URL_API + '/news/' + router.query.id)

            setData(response.data)
            
        }
    
        async function updateRow(e,item){
            e.preventDefault()
    
        }
        if(!data.id) return null

    return (
        <section className="noticias-interna">
            <section className="hero is-medium is-bold img-full-insise">
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
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="section">
            {
                    listNews.map(
                        item => {
                            if (!item.showingoff) return null
                            return (
                                <SectionNoticia {...item} key={item.id} />
                            )
                        }
                    )
                }
                <div className="container is-light">
                    <div className="columns">
                        <div className="column is-three-quarters">
                            <figure className="image is-3by1 is-720x240 mb-5">
                                <img src={ URL_API + '/news/images/' + data.fileimg } />
                            </figure>
                            <h1 className="is-size-2 has-text-left has-text-weight-bold has-text-left-mobile">{ data.maintitle }</h1>
                            <h2 className="is-size-5 has-text-left has-text-weight-light has-text-left-mobile">{ data.subtitle }</h2>
                            <p className="text-notice-space">{ data.new }</p>
                        </div>
                        <div className="column">
                            <figure className="image is-4by5 is-480x600 mb-5">
                                <img src="https://bulma.io/images/placeholders/480x600.png" />

                            </figure>

                            <figure className="image is-4by5 is-480x600">
                                <img src="https://bulma.io/images/placeholders/480x600.png" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-quarters">
                            <figure className="image is-3by1 is-720x240 mb-5">
                                <img src="https://bulma.io/images/placeholders/720x240.png" />  
                            </figure>
                        </div>
                        <div className="column">

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}