import AdminLayout from '../../components/admin/AdminLayout'
import AdminCadastroNoticias from '../../components/admin/AdminCadastroNoticias'

export default function CadastroNoticia(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminCadastroNoticias id={ props.id }/>
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}