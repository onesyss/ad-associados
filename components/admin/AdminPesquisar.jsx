import Link from 'next/link'

export default function AdminPesquisar(props){
    return(
        <section>
            <div className="columns is-12-desktop is-12-mobile">
                <div className="column">
                    <div className="field is-grouped">
                        <div className="control is-expanded">
                            <input className="input" type="text" placeholder="Buscar..." />
                        </div>
                        <p className="control">
                            <button className="button is-primary is-focused" onClick={ props.load }>Pesquisar</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}