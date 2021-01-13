import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import SectionSobre from './SectionSobre'

export default function PageSobre() {

  const [listAbouts, setListAbouts] = useState([])

  useEffect(
    () => {
        async function loadingAbouts(){

            //fazendo conexão com a API e BANCO DE DADOS
            //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
            const response = await axios.get(URL_API + '/abouts')
            
            console.log(response.data)
            setListAbouts(response.data)

        }

        loadingAbouts()
    }
    , [])

  return (
    <section className="PageSobre">
      <section className="hero is-medium is-bold img-full-insise bg-cover" data-animate="bottom">
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
      <section className="section" data-animate="bottom">
      { 
          listAbouts.map(
            item => {
              if(!item.showingoff) return null
              return(
                <SectionSobre {...item} key={ item.id } />
              )
            }
          )
        }
      </section>
      <section className="hero is-medium is-bold img-full-insise-two" data-animate="bottom">
        <div className="hero-body">
          <div className="container has-text-centered has-text-white" data-animate="left">
            <h1 className="is-size-2 has-text-centered">Conheça nossos advogados</h1>
            <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">Uma equipe de sucesso</h2>
            <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
            Estamos orgulhosos de que nosso escritório de advocacia ofereça serviços jurídicos de alto nível por um preço acessível em todo o país! Conosco, você nunca sentirá que os advogados são apenas ladrões de terno, além disso, vencemos 98% de todos os casos. Portanto, conosco, suas chances de ganhar são as mais altas possíveis!
            </p>
            <div className="columns" data-animate="right">
              <div className="column">
                  <h3 className="title is-size-3 is-size-5-mobile has-text-white">01</h3>
                  <h4 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">Pensando</h4>
                  <p className="subtitle is-size-6 is-size-7-mobile has-text-white">Dedicamo-nos a fornecer advogados com experiência profissional, profissional e em sala de tribunal com preços razoáveis, em todos os tipos de processos civis.</p>
              </div>
              <div className="column">
                  <h3 className="title is-size-3 is-size-5-mobile has-text-white">02</h3>
                  <h4 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">Procurando</h4>
                  <p className="subtitle is-size-6 is-size-7-mobile has-text-white">Podemos fornecer-lhe advogados qualificados e experientes, em curto prazo, para quase qualquer comparecimento em tribunal, civil e criminal.</p>
              </div>
              <div className="column">
                  <h3 className="title is-size-3 is-size-5-mobile has-text-white">03</h3>
                  <h4 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">Protegendo</h4>
                  <p className="subtitle is-size-6 is-size-7-mobile has-text-white">Podemos encontrar advogados para lidar com depoimentos, inspeções, julgamentos e quem pode até ajudá-lo a escrever sua documentação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-animate="left">
              <div className="container is-light has-text-centered">
                  <h1 className="is-size-2 has-text-centered">Conheça nossos advogados</h1>
                  <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">Uma equipe de sucesso</h2>
                  <p className="subtitle is-size-5 is-size-7-mobile has-text-black">
                    Valorizamos os membros de nossa equipe, seu intelecto e caráter decisório. Estamos orgulhosos de termos conseguido reunir funcionários inteligentes, talentosos e orientados para o cliente, e estamos felizes em apresentá-los a nossos clientes!
                  </p>
                  <div className="columns">
                      <div className="column">
                          <div className="card">
                              <div className="card-image">
                                <figure className="image is-4by1">
                                  <img src="../assets/images/lawyer-men-group.svg" alt="Nossa Equipe de Advogados" />
                                </figure>
                              </div>
                          </div>
                      </div>
                      <div className="column">
                        <div className="card">
                            <div className="card-image">
                              <figure className="image is-4by1">
                                <img src="../assets/images/lawyer-woman-group.svg" alt="Nossa Equipe de Advogados" />
                              </figure>
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="card">
                            <div className="card-image">
                              <figure className="image is-4by1">
                                <img src="../assets/images/lawyer-men-group_2.svg" alt="Nossa Equipe de Advogados" />
                              </figure>
                            </div>
                        </div>
                      </div>                         
                      <div className="column">
                        <div className="card">
                            <div className="card-image">
                              <figure className="image is-4by1">
                                <img src="../assets/images/lawyer_woman_group_2.svg" alt="Nossa Equipe de Advogados" />
                              </figure>
                            </div>
                        </div>
                      </div>                         
                  </div>
              </div>
          </section>
    </section>
  )
}
