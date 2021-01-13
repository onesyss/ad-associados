//importações nativas do next
import Head from 'next/head'

//importações de components
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useEffect } from 'react'


export default function Layout(props) {
    //efeitos de transição para as div e sections do site
    useEffect(() => {
        const target = document.querySelectorAll('[data-animate]')

        function animate(e) {
            target.forEach(element => {
                const topEl = element.getBoundingClientRect().top
                if (topEl < window.innerHeight) {
                    element.classList.add('animate')
                } else {
                    element.classList.remove('animate')
                }
            })
        }

        animate()
        window.addEventListener('scroll', animate)

        return () => {
            window.removeEventListener('scroll', animate)
        }

    }, [])

    return (
        <html lang="pt-BR">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#fafafa"/>
                <link href="../../assets/fontawesome/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="../../assets/css/style-site.css" rel="stylesheet" type="text/css" />
                <link rel="icon" href="../public/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
                <link rel="icon" href="../..public/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
                <link rel="icon" href="../public/favicon.ico" type="image/x-icon"></link>
                <link rel="icon" href="public/favicon.ico" type="image/x-icon"></link>
                
                <title>Index - Advogados Associados</title>
            </Head>
            <body>
                <Header />
                <Main>
                    { props.children }
                </Main>
                <Footer />
                {/* <script src="/jquery/dist/jquery.min.js"></script>
                <script src="../../assets/fontawesome/js/all.min.js"></script>
                <script src="../../assets/jquery/dist/jquery.min.js"></script> */}
            </body>
        </html>
    )
}
