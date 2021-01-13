import AdminLayout from '../../components/admin/AdminLayout'
import AdminListagemServicos from '../../components/admin/AdminListagemServicos'

export default function ListagemServico(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminListagemServicos />
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}