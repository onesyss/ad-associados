import axios from 'axios'
// import Link from 'next/link'
import Router from 'next/router'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import { useState } from 'react'
import { useEffect } from 'react'
import Menssagem from './Menssagem'

export default function AdminCadastroContato(props) {

    // const [fileImg, setFileImg] = useState(null)

    const [msgVisible, setMsgVisible] = useState(false)

    const [data, setData] = useState({
        name: '',
        // fileimg: '',
        email: '',
        phone: '',
        message: '',
        checked: ''
    })


    // function handleFileChange(e) {
    //     setFileImg(e.target.files[0])
    // }

    function handleChange(e) {
        //objeto que faz o preenchimento dos campos do formulário
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }


    async function handleSubmit(e) {
        e.preventDefault()
        let response = null
        const cookie = new Cookies()

        //AUTENTICANDO
        //faz a a autenticação do usuário, via token e valida no banco
        const token = cookie.get('token')
        axios.defaults.headers.Authorization = 'Bearer ' + token

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
        //realiza o upload da imagem enviada pelo campo file
        // if(fileImg){
        //     const formData = new FormData()
            
        //     formData.append('fileimg', fileImg, fileImg.name)
        //     const config = {
        //         headers: {
        //             'content-type': "multipart/form-data",
        //             Authorization: 'Bearer ' + token
        //         }
        //     }
        //     const resp = await axios.post(URL_API + '/contacts/' + response.data.id + '/images', formData, config)
        // }
    setTimeout( () => {
        Router.push('/admin/listagemContato')
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
        <section className="cadastro px-o py-0">
            <form onSubmit={handleSubmit}>
                <div className="column is-10-desktop is-12-mobile">
                    <div className="p-1 mx-5">
                        <div className="columns is-desktop">
                            <div className="column">
                                <h1 className="is-size-1">Contato</h1>
                                <h2 className="is-size-4">Cadastar um novo Contato</h2>
                            </div>
                        </div>
                        {/* {JSON.stringify(data)} */}
                        <Menssagem close={ closeMsg } visible={ msgVisible }>Contato Cadastrada com sucesso !</Menssagem>
                        <div className="columns is-desktop">
                            <div className="column">
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input onChange={handleChange} value={data.name} className="input is-medium" required type="text" name="name" placeholder="Nome Completo" />
                                        <span className="icon is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <span className="icon is-right">
                                            <i className="fas fa-check fa-sm"></i>
                                        </span>
                                    </div>
                                </div>
                                {/* <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-medium" type="file" name="fileimg" onChange={handleFileChange} required placeholder="Selecione uma imagem" />
                                        <span className="icon is-left">
                                            <i className="fas fa-file-alt"></i>
                                        </span>
                                        <span className="icon is-right">
                                            <i className="fas fa-check fa-sm"></i>
                                        </span>
                                    </div>
                                </div> */}
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input onChange={handleChange} value={data.email} className="input is-medium" required type="text" name="email" placeholder="E-mail Principal" />
                                        <span className="icon is-left">
                                            <i className="fas fa-heading"></i>
                                        </span>
                                        <span className="icon is-right">
                                            <i className="fas fa-check fa-sm"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input onChange={handleChange} value={data.phone} className="input is-medium" required type="text" name="phone" placeholder="DDD + Telefone" />
                                        <span className="icon is-left">
                                            <i className="fas fa-heading"></i>
                                        </span>
                                        <span className="icon is-right">
                                            <i className="fas fa-check fa-sm"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <textarea onChange={handleChange} value={data.message} className="textarea pt-5" required type="text" name="message" placeholder="Escreva aqui sua dúvida ou sugestão"></textarea>
                                        <span className="icon is-left">
                                            <i className="fas fa-paragraph"></i>
                                        </span>
                                        <span className="icon is-right">
                                            <i className="fas fa-check fa-sm"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <div className="select is-medium">
                                            <select onChange={handleChange} value={data.checked}>
                                                <option value={ 0 }>Não</option>
                                                <option value={ 1 }>Sim</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>                               
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button type='submit' className="button is-primary is-focused">Cadastrar</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary is-light is-focused">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}