import AdminLayout from '../../components/admin/AdminLayout'
import AdminCadastroContato from '../../components/admin/AdminCadastroContato'

export default function CadastroContato(props) {

    return (
        <AdminLayout>
            <AdminCadastroContato id={ props.id }/>
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}