import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

import SectionEquipe from './SectionEquipe'
import SectionServicosLinha from './SectionServicosLinha'
import SectionPraticasJuridicas from './SectionPraticasJuridicas'
import SectionNoticiaHome from './SectionNoticiaHome'

export default function PageHome() {

  const [listNews, setListNews] = useState([])
  const [listAbout, setListAbout] = useState([])

  useEffect(
      () => {
          async function loading() {

              //fazendo conexão com a API e BANCO DE DADOS
              //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
              const response = await axios.get(URL_API + '/news')
              const response_2 = await axios.get(URL_API + '/abouts')

              setListNews(response.data)
              setListAbout(response_2.data)
          }

          loading()
      }
      , [])

  return (
    <section>
          <section className="hero is-large is-bold img-full-index bg-cover" data-animate="bottom">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title is-size-3 is-size-5-mobile pb-2 has-text-white">
                  Ajudando os Negócios
                </h1>
                <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
                  Os negócios exigem uma sólida formação legislativa para funcionar bem.
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
                <div className="column has-text-centered-desktop has-text-centered-mobile" data-animate="bottom">
                  <h1 className="title is-size-4-mobile is-size-2-desktop pb-5">Por que você pode confiar na Advogados Associados: Nossos valores </h1>
                  <p className="subtitle is-size-6-mobile is-size-5-desktop">Valorizamos a justiça, a honestidade e o tempo. Estamos sempre ao seu dispor, pois somos responsáveis pela sua defesa. Qualquer detalhe será notado e poderá ser essencial para o seu caso.</p>
                  <p className="subtitle is-size-6-mobile is-size-5-desktop">Durante nosso trabalho, reunimos uma equipe de especialistas dedicados, com vasta experiência em ajuda jurídica. Damos grande ênfase ao direito comercial, porque no ambiente de rápida mudança de hoje, as pessoas precisam de assistência nas esferas comerciais. Nossa experiência nos permite ter confiança e defender nossas palavras.</p>
                  <p className="subtitle is-size-6-mobile is-size-5-desktop">Nossa empresa foi criada em 1998. Começamos como uma pequena consultoria jurídica. Nós provamos nossa competência e tivemos muitos clientes satisfeitos. Expandimos nossa atividade e começamos a fornecer muitos outros serviços jurídicos para atender às necessidades mais amplas dos clientes.</p>
                </div>
            </div>  
          </section>
          <section className="hero is-medium is-bold ">
            <div className="hero-body img-full-linha-index" data-animate="top">
              <div className="container has-text-centered">
                <h1 className="title is-size-3 is-size-4-mobile pb-5 has-text-white">
                  20 anos de experiência em diversos casos
                </h1>
                <h2 className="subtitle is-size-5 is-size-6-mobile has-text-white">
                  Estamos orgulhosos de que nosso escritório de advocacia ofereça serviços jurídicos de alto nível por um preço acessível em todo o país! Conosco, você nunca sentirá que os advogados são apenas ladrões de terno, além disso, vencemos 98% de todos os casos. Portanto, conosco, suas chances de ganhar são as mais altas possíveis!
                </h2>
                <div className="columns pt-5">
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">1998</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">ANO DE ESTABELECIMENTO</h5>
                  </div>
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">547</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">CASOS GANHOS</h5>
                  </div>
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">+45</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">PARCERIAS</h5>
                  </div>
                  <div className="column">
                    <h3 className="title is-size-3 is-size-5-mobile has-text-white">1500</h3>
                    <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">CONFIANÇA DOS CLIENTES</h5>
                  </div>
                </div>              
              </div>
            </div>
          </section>
          <section className="hero is-medium is-bold" data-animate="bottom">
            {/* { 
              listServices.slice(1).map(
                item => {
                  if(!item.showingoff) return null
                  return(
                    <SectionServicosLinha {...item} key={ 'Services' + item.id } />
                  )
                }
              )
            } */}
          </section>
          <section data-animate="bottom">
            <SectionEquipe list={listAbout}/>
          </section>

          <section className="hero is-medium is-dark is-bold"  data-animate="bottom">
            <div className="hero-body">
                <div className="container has-text-centered-desktop has-text-centered-mobile">
                    <h1 className="title is-size-3 is-size-4-mobile pb-5">
                        Notícias Recentes
                    </h1>
                    <div className="columns pt-5">
                      {
                          listNews.slice(0,3).map(
                            item => {
                                if (!item.showingoff) return null
                                return (
                                    <SectionNoticiaHome {...item} key={'news' + item.id} />
                                )
                            }
                          )
                        }
                    </div>
                </div>
            </div>           
          </section>
          <section className="section" data-animate="bottom">
            <SectionPraticasJuridicas />
          </section>
    </section>
  )
}
