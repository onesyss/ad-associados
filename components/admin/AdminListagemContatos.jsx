import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Menssagem from './Menssagem'

export default function AdminListagemContatos() {

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
            loadingContacts()
        }, []
    )

    async function loadingContacts(){

        //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
        const response = await axios.get(URL_API + '/news')
        setList([...response.data])
        console.log(list)
        
    }
    async function loadingContacts(){

        //faz a requizição no adonis e puxa as informações de rota vindas do banco de dados
        const response = await axios.get(URL_API + '/contacts')
        setList([...response.data])
        console.log(list)
        
    }

    async function updateRow(e,item){
        e.preventDefault()//inibe o comportamento padrão da tag  "a"

    }

    //faz a remoção da linha da notica que deseja remover
    async function removeContact(e,id){
        e.preventDefault() //inibe o comportamento padrão da tag  "a"
        const response = await axios.delete(URL_API + '/contacts/'+ id) //requisição de deletar vinda do adones que executa a remoção no banco
        await loadingContacts()
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
                    {/* <Pesquisar load={ loadingContacts } /> */}
                    <div className="table-container">
                        <BtnAdicionar />
                        <Menssagem close={ closeMsg } visible={ msgVisible }>Contato Removido com sucesso !</Menssagem>
                        <table className="table" width="100%">
                            <TableTitle />
                            <tbody>
                                <TableRow deleteRow={ removeContact } list={ list }/>
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
                <h1 className="is-size-1">Contatos</h1>
                <h2 className="is-size-4">Listagem de Contatos</h2>
            </div>
        </div>
    )
}
// function Pesquisar(props){
//     return(
//     <div className="columns is-12-desktop is-12-mobile">
//         <div className="column">
//             <div className="field">
//                 <div className="control has-icons-left has-icons-right">
//                     <input className="input is-medium" type="search" name="search" placeholder="Buscar" />
//                     <span className="icon is-left">
//                         <i className="fas fa-user"></i>
//                     </span>
//                     <span className="icon is-right">
//                         <i className="fas fa-check fa-sm"></i>
//                     </span>
//                 </div>
//             </div>
//             <div className="field is-grouped">
//                 <div className="control">
//                     <button className="button is-primary is-focused" onClick={ props.load }>Pesquisar</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }
function BtnAdicionar(props){
    return(
    <div className="field is-grouped">
        <div className="control">
            <Link href="/admin/cadastroContato"><button className="button is-primary is-focused">Adicionar Contato</button></Link>
        </div>
    </div>        
    )
}
function TableTitle(props){
    return(
        <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Menssagem</th>
            <th>Email Lido</th>
            <th>Data</th>
            {/* <th>Alterar</th> */}
            <th>Remover</th>
        </tr>
    </thead>      
    )
}
function TableRow(props){
    return(
        <>
        {
            props.list.map(
                function(item){
                    return(
                        <tr key={ item.id }>
                            <td>{ item.id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.email }</td>
                            <td>{ item.phone }</td>
                            <td>{ item.message }</td>
                            <td>{ item.checked }</td>
                            <td>{ item.created_at }</td>
                            <td><Link href={ "/admin/cadastroContato?id=" + item.id }><a href="#"><i className="fas fa-pencil-alt"></i> Atualizar</a></Link></td>
                            <td><a onClick={ e => props.deleteRow(e,item.id) }><i className="fas fa-trash-alt"></i> Remover</a></td>
                        </tr>
                    )
                }
            )
        }
        </>
    )
}