import { URL_API } from '../utils/config'
import Link from 'next/link'

export default function SectionNoticiaInterna(props) {

    return (
        <section className="section">
            <section className="noticia">
                <div className="container is-light">
                    <div className="columns">
                        <div className="column is-three-quarters">
                            <figure className="image is-3by1 is-720x240 mb-5">
                                <img src={URL_API + '/news/images/' + props.fileimg } alt={ props.fileimg } />
                            </figure>
                            <h1 className="is-size-2 has-text-left has-text-weight-bold has-text-left-mobile">{ props.maintitle }</h1>
                            <h2 className="is-size-5 has-text-left has-text-weight-light has-text-left-mobile">{ props.subtitle }</h2>
                            {/* <p className="text-notice-space">{props.new}</p> */}
                            <p dangerouslySetInnerHTML={ {__html: props.new } } className="text-notice-space"></p>
                        </div>
                        <div className="column">
                            <figure className="image is-4by5 is-480x600 mb-5">
                                <img src="https://bulma.io/images/placeholders/480x600.png" alt="Banner Promocional" />

                            </figure>

                            <figure className="image is-4by5 is-480x600">
                                <img src="https://bulma.io/images/placeholders/480x600.png" alt="Banner Promocional" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-quarters">
                            <figure className="image is-3by1 is-720x240 mb-5">
                                <img src="https://bulma.io/images/placeholders/720x240.png" />
                            </figure>
                        </div>
                        <div className="column">

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}