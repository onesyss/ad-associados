import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Menssagem from './Menssagem'

export default function AdminListagemServices() {

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
            loadingServices()
        }, []
    )

    async function loadingServices(){

        //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
        const response = await axios.get(URL_API + '/services')
        setList([...response.data])
        console.log(list)
        
    }

    async function updateRow(e,item){
        e.preventDefault()

    }

    //faz a remoção da linha da notica que deseja remover
    async function removeService(e,id){
        e.preventDefault() //inibe o comportamento padrão da tag  "a"
        const response = await axios.delete(URL_API + '/services/'+ id) //requisição de deletar vinda do adones que executa a remoção no banco
        await loadingServices()
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
                        <Menssagem close={ closeMsg } visible={ msgVisible }>Serviço Removido com sucesso !</Menssagem>
                        <table className="table" width="100%">
                            <TableTitle />
                            <tbody>
                                <TableRow deleteRow={ removeService } list={ list }/>
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
                <h1 className="is-size-1">Serviços</h1>
                <h2 className="is-size-4">Listagem de Serviços</h2>
            </div>
        </div>
    )
}

function BtnAdicionar(props){
    return(
    <div className="field is-grouped">
        <div className="control">
            <Link href="/admin/cadastroServico"><button className="button is-primary is-focused">Adicionar Serviço</button></Link>
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
            {/* <th>Foto</th> */}
            <th>Titulo Principal</th>
            <th>Titulo Secundário</th>
            <th>Descrição</th>
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
                            {/* <td>
                                <div className="modal" id={ 'image' + item.id }>
                                <div className="modal-background px-5 py-5"></div>
                                <div className="modal-content bg-cover">
                                    <span className="image is-4by3">
                                        <img src={ URL_API + '/practices/images/' + item.fileimg } alt="Foto da notícia" />
                                    </span>
                                </div>
                                <button onClick={ () => showimage(item.id) } class="modal-close is-large" aria-label="close"></button>
                                </div>                            
                                <img onClick={ () => showimage(item.id) } src={ URL_API + '/practices/images/' + item.fileimg } alt="Foto" width="170px" srcset=""/>
                            </td> */}
                            <td>{ item.maintitle }</td>
                            <td>{ item.subtitle }</td>
                            <td>{ item.description }</td>
                            <td>{ item.showingoff ? "Sim"  : "Não" }</td>
                            <td>{ item.created_at }</td>
                            <td><Link href={ "/admin/cadastroServico?id=" + item.id }><a href="#"><i className="fas fa-pencil-alt"></i> Atualizar</a></Link></td>
                            <td><a onClick={ e => props.deleteRow(e,item.id) }><i className="fas fa-trash-alt"></i> Remover</a></td>
                        </tr>
                    )
                }
            )
        }
        </>
    )
}