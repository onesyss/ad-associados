import AdminLayout from '../../components/admin/AdminLayout'
import AdminCadastroServicos from '../../components/admin/AdminCadastroServicos'

export default function cadastroServico(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminCadastroServicos id={ props.id }/>
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}