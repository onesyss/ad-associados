import AdminLayout from '../../components/admin/AdminLayout'
import AdminListagemNoticias from '../../components/admin/AdminListagemNoticias'

export default function ListagemNoticias(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminListagemNoticias />
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}