import axios from 'axios'
import { URL_API } from '../utils/config'
import { useState } from 'react'
// import { setCookie } from 'react-cookie'
import { Cookies } from 'react-cookie'
import Router from 'next/router'
import Head from 'next/head'

<style jsx>{`
    .erro {
        dispaly:none;
        color: red;
        font-weight: bold;
    }
`}</style>

export default function Login() {

    const msgError = true

    //variavel de destado com login e senha do usuario
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function onChange(e) {//capta as informações dos inputs

        const { name, value } = e.target

        setUser({ ...user, [name]: value })

    }
    async function onSubmit(e) {

        e.preventDefault()
        //vai fazer uma chamada ajax na api passando os dados coletados no formulario abaixo
        try {

            const cookie = new Cookies()
            const response = await axios.post(URL_API + '/login', user)
            cookie.set('token', response.data.token)
            Router.push('/admin')
            

        } catch (error) {
                function Error(){
                    document.getElementById('msg').style.display = "flex"
                }
            // alert('Deu erro, login falhou !')
        }
    }    
    return (
        <section className="bg-login is-centered bg-login">
            <Head>
                <link href="../../assets/css/style-site.css" rel="stylesheet" type="text/css" />
                <link rel="icon" href="../public/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
                <link rel="icon" href="../..public/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
                <link rel="icon" href="../public/favicon.ico" type="image/x-icon"></link>
                <link rel="icon" href="public/favicon.ico" type="image/x-icon"></link>
                
                <title>Área Administrativa | Login</title>
            </Head>
            <section className="hero is-large is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered boxshadow-login">
                        {/* {JSON.stringify(user)} */}
                        <form onSubmit={onSubmit}>
                            <h3 className="is-size-3 has-text-centered px-3 py-3">Área Restrita</h3>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-medium is-size-4" type="email" name="email" value={user.email} onChange={onChange} placeholder="Informe seu E-mail" />
                                    <span className="icon is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-right">
                                        <i className="fas fa-check fa-sm"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input is-medium is-size-4" type="password" name="password" value={user.password} onChange={onChange} placeholder="Informe sua senha" />
                                    <span className="icon is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                    <span className="icon is-right">
                                        <i className="fas fa-check fa-sm"></i>
                                    </span>
                                    <p className="px-3 py-3"><Link href="/"><a href="#">Esqueci minha senha</a></Link></p>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-primary">Logar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    )
}