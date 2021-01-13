export default function SectionServicosLinha(props) {
    return (
        <div className="hero-body img-full-linha-index">
            <div className="container has-text-centered">
                <h1 className="title is-size-3 is-size-4-mobile pb-5 has-text-white">
                { props.maintitle }
            </h1>
                <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
                { props.subtitle }
            </p>
                <h2 className="subtitle is-size-5 is-size-6-mobile has-text-white">
                { props.description }
                </h2>
                <div className="columns pt-5">
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">1998</h3>
                        <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">ANO DE ESTABELECIMENTO</h5>
                    </div>
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">547</h3>
                        <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">CASOS GANHOS</h5>
                    </div>
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">+45</h3>
                        <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">PARCERIAS</h5>
                    </div>
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">1500</h3>
                        <h5 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">CONFIANÇA DOS CLIENTES</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}