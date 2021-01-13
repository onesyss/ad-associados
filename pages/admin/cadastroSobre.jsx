import AdminLayout from '../../components/admin/AdminLayout'
import AdminCadastroSobres from '../../components/admin/AdminCadastroSobres'

export default function cadastroSobre(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminCadastroSobres id={ props.id }/>
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}