export default function SectionSobre(props) {
    return (       
        <div className="container">
            <div className="columns">
                <div className="column">
                    <h1 className="is-size-1 has-text-centered">{ props.maintitle }</h1>
                    <h2 className="is-size-5 has-text-weight-light has-text-centered mb-3">{ props.subtitle }</h2>
                    <p className="is-size-6 has-text-centered pt-5">
                        { props.description }
                    </p>
                </div>
            </div>
        </div>
    )
}