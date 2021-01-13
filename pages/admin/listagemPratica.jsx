import AdminLayout from '../../components/admin/AdminLayout'
import AdminListagemPraticas from '../../components/admin/AdminListagemPraticas'

export default function ListagemPratica(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminListagemPraticas />
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}