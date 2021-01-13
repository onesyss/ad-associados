import { URL_API } from '../utils/config'
import Link from 'next/link'

export default function SectionNoticiaHome(props) {
    return (
        <div className="column has-text-left-desktop has-text-centered-mobile px-6">
            <h4 className="title is-size-5 is-size-6-mobile">{props.category}</h4>
            <h3 className="title is-size-3 is-size-5-mobile py-3">{props.maintitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: props.new.slice(0, 460) }} className="subtitle is-size-6 is-size-7-mobile is-bold"></p>
            <a className="button is-dark is-inverted">
                <span className="icon">
                    <i className="fas fa-newspaper"></i>
                </span>
                <Link href={"/noticiasInterna?id=" + props.id}>
                    <span>Saiba mais...</span>
                </Link>
            </a>
        </div>
    )
}