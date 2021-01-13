import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import SectionServicos from './SectionServicos'
import SectionServicosLinha from './SectionServicosLinha'
import SectionContato from './SectionContato'

export default function PageServicos() {

  const [listServices, setListServices] = useState([])

  useEffect(
    () => {
        async function loadingServices(){

            //fazendo conexão com a API e BANCO DE DADOS
            //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
            const response = await axios.get(URL_API + '/services')
            
            console.log(response.data)
            setListServices(response.data)

        }

        loadingServices()
    }
    , [])

  return (
    <section className="servicos">
      <section className="hero is-medium is-bold img-full-insise bg-cover" data-animate="bottom">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-white">
              Serviços
            </h1>
            <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
              Por que somos os premiados Escritório de advocacia
            </p>
            <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#" className="is-active" aria-current="page">Serviços</a></li>
                <li><a href="#">Práticas Jurídicas</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="section" data-animate="right">
        {
          listServices.slice(0, 1).map(
            item => {
              if(!item.showingoff) return null
              return(
                <SectionServicos {...item} key={ item.id } />
              )
            }
          )
        }
      </section>
      <section className="hero is-medium is-bold" data-animate="bottom">
        { 
          listServices.slice(1).map(
            item => {
              if(!item.showingoff) return null
              return(
                <SectionServicosLinha {...item} key={ 'Services' + item.id } />
              )
            }
          )
        }
      </section>
      <section className="section" data-animate="left">
        <SectionContato />
      </section>
    </section>
  )
}
