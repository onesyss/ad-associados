import Link from 'next/link'
import Head from 'next/head'

export default function erro_404() {
    return (
        <section className="bg-coffer">
            <Head>
                <link href="../../assets/css/style-site.css" rel="stylesheet" type="text/css" />
                <link rel="icon" href="../public/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
                <link rel="icon" href="../..public/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
                <link rel="icon" href="../public/favicon.ico" type="image/x-icon"></link>
                <link rel="icon" href="public/favicon.ico" type="image/x-icon"></link>
                
                <title>Index - erro 404</title>
            </Head>
            <section className="hero is-large is-bold">
                <div className="hero-body">
                <div className="container has-text-centered">
                    <img className="bg-coffer" src="../assets/images/erro404_v2.png" alt="Erro 404" />
                </div>
                </div>
            </section>
        </section>
    )
}