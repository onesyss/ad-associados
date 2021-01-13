import AdminLayout from '../../components/admin/AdminLayout'
import AdminListagemContatos from '../../components/admin/AdminListagemContatos'

export default function ListagemContato(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminListagemContatos />
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}