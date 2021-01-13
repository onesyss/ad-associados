import axios from 'axios'
// import Link from 'next/link'
import Router from 'next/router'
import { URL_API } from '../utils/config'
// import { Cookies } from 'react-cookie'
import { useState } from 'react'
import { useEffect } from 'react'
import Menssagem from '../components/admin/Menssagem'

export default function SectionContato(props) {

    const [msgVisible, setMsgVisible] = useState(false)

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        checked: ''
    })

    function handleChange(e) {
        //objeto que faz o preenchimento dos campos do formulário
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = null

        //fazendo conexão com a API e BANCO DE DADOS
        //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
        if (props.id) {
            response = await axios.put(URL_API + '/contacts/' + props.id, data)
            
        } else {
            //faz o envio dos dados captados no formulário de cadastro de noticias
            response = await axios.post(URL_API + '/contacts', data)

            //caso corra tudo corretamente ele exibe uma menssagemd e sucesso
            setMsgVisible(true)
        }

    setTimeout( () => {
        Router.push('/')
    },2000)
    
    }

    useEffect(
        () => {
            async function loadingContacts() {
                const cookie = new Cookies()
                //AUTENTICANDO
                //faz a a autenticação do usuário, via token e valida no banco
                const token = cookie.get('token')
                axios.defaults.headers.Authorization = 'Bearer ' + token

                //fazendo conexão com a API e BANCO DE DADOS
                //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
                const response = await axios.get(URL_API + '/contacts/' + props.id)
                console.log(response.data)
                setData({ ...response.data })
            }
            if (props.id) {
                loadingContacts()
            }
            console.log(props.id)
        }
        , [])

        function closeMsg(){
            setMsgVisible(false)
        }

    return (
        <section className="section" data-animate="right">
            <form onSubmit={handleSubmit}>
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
                                {/* {JSON.stringify(data)} */}
                                <Menssagem close={ closeMsg } visible={ msgVisible }>Contato enviado com sucesso !</Menssagem>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-medium" onChange={handleChange} value={data.name} type="text" name="name" required placeholder="Nome Completo" />
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
                                        <input className="input is-medium" onChange={handleChange} value={data.email} type="text" name="email" required placeholder="E-mail" />
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
                                        <input className="input is-medium" onChange={handleChange} value={data.phone} type="text" name="phone" required placeholder="Telefone com DDD" />
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
                                        <textarea className="textarea pt-5" onChange={handleChange} value={data.message} type="text" name="message" required placeholder="Menssagem"></textarea>
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
                                        <button type='submit' className="button is-primary">Enviar</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary is-light">Cancel</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </form>
        </section>
    )
}