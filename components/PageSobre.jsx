import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import SectionSobre from './SectionSobre'
import SectionSobreLinha from './SectionSobreLinha'
import SectionEquipe from './SectionEquipe'

export default function PageSobre() {

  const [listAbouts, setListAbouts] = useState([])

  useEffect(
    () => {
      async function loadingAbouts() {

        //fazendo conexão com a API e BANCO DE DADOS
        //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
        const response = await axios.get(URL_API + '/abouts')

        setListAbouts(response.data)

      }

      loadingAbouts()
    }
    , [])

  return (
    <section className="PageSobre" data-animate="top">
      <section className="hero is-medium is-bold img-full-insise bg-cover">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-white">
              Sobre
            </h1>
            <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
              Venha conhecer um pouco da nossa História
            </p>
            <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#" className="is-active" aria-current="page">Sobre</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Práticas Jurídicas</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="section">
        {
          listAbouts.slice(0, 1).map(
            item => {
              if (!item.showingoff) return null
              return (
                <SectionSobre {...item} key={'about' + item.id} />
              )
            }
          )
        }
      </section>
      <section className="hero is-medium is-bold img-full-insise-two">
        {
          listAbouts.slice(1, 2).map(
            item => {
              if (!item.showingoff) return null
              return (
                <SectionSobreLinha {...item} key={'line' + item.id} />
              )
            }
          )
        }
      </section>
      <SectionEquipe />
    </section>
  )
}
