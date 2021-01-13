import AdminLayout from '../../components/admin/AdminLayout'
import AdminCadastroPraticas from '../../components/admin/AdminCadastroPraticas'

export default function cadastroPratica(props) {
    // console.log(props)    
    return (
        <AdminLayout>
            <AdminCadastroPraticas id={ props.id }/>
        </AdminLayout>
    )
}

export async function getServerSideProps(ctx){ 
    return{
        props:ctx.query
    }
}