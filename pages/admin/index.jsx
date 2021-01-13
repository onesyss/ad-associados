import AdminLayout from '../../components/admin/AdminLayout'
import AdminListagemNoticias from '../../components/admin/AdminListagemNoticias'
import AdminListagemContatos from '../../components/admin/AdminListagemContatos'

export default function Index(props) {
    return (
        <AdminLayout>
            { props.children }
        </AdminLayout>
    )
}