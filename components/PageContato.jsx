import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import SectionContato from './SectionContato'

export default function PageContato() {
  return (
    <section className="contato" data-animate="bottom">
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
      <section className="section">
        <SectionContato />
      </section>
      <section className="container">
          <div className="columns has-text-centered px-5 py-5">
          <div className="column">
                  <ul className="menu-list">
                      {/* <li><img className="img-call-center-inside" src="../../assets/images/img-Call-Center.png" alt="Imagem do Call Center Endereço" width="380" height="374" title="Call Center Endereço"/></li> */}
                      <li><Link href="/contato"><a className="has-text-grey" alt="Rodapé Horário"><span className="pr-3"><i className="fas fa-clock"></i></span> Horário: seg a sex 8h às 18h</a></Link></li>
                  </ul>
              </div>
              <div className="column">
                  <ul className="menu-list">
                      <li><Link href="/contato"><a className="has-text-grey" alt="Rodapé Telefone"><span className="pr-3"><i className="fas fa-phone-alt"></i></span> Telefone: 81 34654523</a></Link></li>
                  </ul>
              </div>
              <div className="column">
                  <ul className="menu-list">
                      <li><Link href="/contato"><a className="has-text-grey" alt="Rodapé Endereço"><span className="pr-3"><i className="fas fa-map-marker-alt"></i></span> Endereço: Rua Amazonas, 315 <br /> Boa Viagem, Recife-PE</a></Link></li>
                  </ul>
              </div>
          </div>
      </section>
      <section className="hero">
          <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3950.007997219786!2d-34.88823108484289!3d-8.100665494168139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1594118013977!5m2!1spt-BR!2sbr"></iframe>
      </section>
    </section>
  )
}
