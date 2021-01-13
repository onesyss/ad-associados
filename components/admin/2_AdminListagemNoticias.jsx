import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Menssagem from './Menssagem'

export default function AdminListagemNoticias() {

    //variavem de estado que contem a listagem de notícias
    const [list, setList] = useState([])

    const [msgVisible, setMsgVisible] = useState(false)

    //cria uma instância do cookie para o login
    const cookie = new Cookies()

    //faz a a autenticação do usuário, via token e valida no banco
    const token = cookie.get('token')
    axios.defaults.headers.Authorization= 'Bearer ' + token
    
    //useEffect é uma forma de execultar uma função chamando uma unica vez, após a renderização de um componente
    useEffect(
        () => {
            loadingNotices()
        }, []
    )

    async function loadingNotices(){

        //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
        const response = await axios.get(URL_API + '/news')
        setList([...response.data])
        
    }

    async function updateRow(e,item){
        e.preventDefault()

    }

    //faz a remoção da linha da notica que deseja remover
    async function removeNotice(e,id){
        e.preventDefault() //inibe o comportamento padrão da tag  "a"
        const response = await axios.delete(URL_API + '/news/'+ id) //requisição de deletar vinda do adones que executa a remoção no banco
        await loadingNotices()
        await setMsgVisible(true)
        console.log(msgVisible)

    }
    function closeMsg(){
        setMsgVisible(false)
    }
    return (
        <section className="listagem">
            <div className="column">   
                <div className="p-1 mx-5">
                    <Titulo />
                    <div className="table-container">
                        <BtnAdicionar />
                        <Menssagem close={ closeMsg } visible={ msgVisible }>Notícia Removida com sucesso !</Menssagem>
                        <table className="table" width="100%">
                            <TableTitle />
                            <tbody>
                                <TableRow deleteRow={ removeNotice } list={ list }/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Titulo(props){
    return(
        <div className="columns is-variable is-desktop">
            <div className="column">
                <h1 className="is-size-1">Notícias</h1>
                <h2 className="is-size-4">Listagem de Notícias</h2>
            </div>
        </div>
    )
}

function BtnAdicionar(props){
    return(
    <div className="field is-grouped">
        <div className="control">
            <Link href="/admin/cadastroNoticia"><button className="button is-primary is-focused">Adicionar noticia</button></Link>
        </div>
    </div>        
    )
}
function TableTitle(props){
    return(
        <thead>
        <tr>
            <th>ID</th>
            <th>Categoría</th>
            <th>Foto</th>
            <th>Titulo Principal</th>
            {/* <th>Titulo Secundário</th> */}
            {/* <th>Conteúdo do Artigo</th> */}
            <th>Autor</th>
            <th>Visível</th>
            <th>Data da Publicação</th>
            <th>Alterar</th>
            <th>Remover</th>
        </tr>
    </thead>      
    )
}
function TableRow(props){

    function showimage(id){
        document.querySelector('#image' + id).classList.toggle('is-active')
    }

    return(
        <>
        {
            props.list.map(
                function(item){
                    return(
                        <tr key={ item.id }>
                            <td>{ item.id }</td>
                            <td>{ item.category }</td>
                            {/* <td>{ item.fileimg }</td> */}
                            <td>
                                <div className="modal" id={ 'image' + item.id }>
                                <div className="modal-background px-5 py-5"></div>
                                <div className="modal-content">
                                    <span className="image is-4by3">
                                        <img src={ URL_API + '/news/images/' + item.fileimg } alt="Foto da notícia" />
                                    </span>
                                </div>
                                <button onClick={ () => showimage(item.id) } className="modal-close is-large" aria-label="close"></button>
                                </div>                            
                                <img className="bg-cover" onClick={ () => showimage(item.id) } src={ URL_API + '/news/images/' + item.fileimg } alt="Foto" width="170px" srcSet=""/>
                            </td>
                            <td>{ item.maintitle }</td>
                            {/* <td>{ item.subtitle }</td> */}
                            {/* <td>{ item.new }</td> */}
                            <td>{ item.author }</td>
                            <td>{ item.showingoff ? "Sim"  : "Não" }</td>
                            <td>{ item.created_at }</td>
                            <td><Link href={ "/admin/cadastroNoticia?id=" + item.id }><a href="#"><i className="fas fa-pencil-alt"></i><span> Alterar</span></a></Link></td>
                            <td><a onClick={ e => props.deleteRow(e,item.id) }><i className="fas fa-trash-alt"></i><span> Remover</span></a></td>
                        </tr>
                    )
                }
            )
        }
        </>
    )
}