import Head from 'next/head'
import { useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminPainel from './AdminPainel'

export default function AdminLayout(props) {

    const [openMenu, setOpenMenu] = useState(true)

    function toggleMenu(e){
        e.preventDefault()
        setOpenMenu(!openMenu)
    }
    
    return (
        <section>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="../../assets/css/style-admin.css" />
                <link href="../../assets/fontawesome/css/all.min.css" rel="stylesheet" type="text/css" />
                
                <title>Painel Administrativo</title>
            </Head>
            <AdminHeader toggleMenu={ toggleMenu }/>
            <AdminPainel openMenu={ openMenu }>
                { props.children }
            </AdminPainel>
        </section>
    )
}