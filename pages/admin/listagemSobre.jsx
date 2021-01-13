import AdminLayout from '../../components/admin/AdminLayout'
import AdminListagemSobres from '../../components/admin/AdminListagemSobres'

export default function ListagemSobre(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminListagemSobres />
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}