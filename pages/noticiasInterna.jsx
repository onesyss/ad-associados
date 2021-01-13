import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import PageNoticiasInterna from '../components/PageNoticiasInterna'

export default function noticiasInterna() {

    const router = useRouter()

    return (
        <Layout>
            <PageNoticiasInterna id={ router.query.id } />
        </Layout>
    )
}