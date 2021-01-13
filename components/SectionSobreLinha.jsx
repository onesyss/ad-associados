export default function SectionSobreLinha(props) {
    return (
        <div className="hero-body">
            <div className="container has-text-centered has-text-white">
                <h1 className="is-size-2 has-text-centered">{ props.maintitle }</h1>
                <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">{ props.subtitle }</h2>
                <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
                    { props.description }                
                </p>
                <div className="columns">
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">01</h3>
                        <h4 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">Pensando</h4>
                        <p className="subtitle is-size-6 is-size-7-mobile has-text-white">Dedicamo-nos a fornecer advogados com experiência profissional, profissional e em sala de tribunal com preços razoáveis, em todos os tipos de processos civis.</p>
                    </div>
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">02</h3>
                        <h4 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">Procurando</h4>
                        <p className="subtitle is-size-6 is-size-7-mobile has-text-white">Podemos fornecer-lhe advogados qualificados e experientes, em curto prazo, para quase qualquer comparecimento em tribunal, civil e criminal.</p>
                    </div>
                    <div className="column">
                        <h3 className="title is-size-3 is-size-5-mobile has-text-white">03</h3>
                        <h4 className="subtitle is-size-5 is-size-7-mobile is-bold has-text-white">Protegendo</h4>
                        <p className="subtitle is-size-6 is-size-7-mobile has-text-white">Podemos encontrar advogados para lidar com depoimentos, inspeções, julgamentos e quem pode até ajudá-lo a escrever sua documentação.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}