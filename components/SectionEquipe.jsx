import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
import { useEffect } from 'react'

export default function SectionEquipe(props) {

    const [listAbouts, setListAbouts] = useState([])

    // console.log(props.list)

    useEffect(
        () => {
            async function loadingAbouts() {

                //fazendo conexão com a API e BANCO DE DADOS
                //faz a requizição no adonis e puxa as informações de rota viondas do banco de dados
                const response = await axios.get(URL_API + '/abouts')

                setListAbouts(response.data)

            }
            if(props.list){
                setListAbouts(props.list)
            }else{
                loadingAbouts()
            }
            
        }
        , [props.list])

    return (
    <section className="section">
        {
            listAbouts.slice(2, 3).map(
                item => {
                    if (!item.showingoff) return null
                    return (
                        <div className="container is-light has-text-centered">
                            <h1 className="is-size-2 has-text-centered">{item.maintitle}</h1>teste
                            <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">{item.subtitle}</h2>
                            <p className="subtitle is-size-5 is-size-7-mobile has-text-black">
                                {item.description}
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
                    )
                }
            )
        }
    </section>
    )
}