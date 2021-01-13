import Link from 'next/link'
import AdminMenu from './AdminMenu'

export default function AdminPainel(props) {
    return (
        <section>
            <section className="section mx-0 my-0 px-0 py-0">
                <div className="columns is-0 is-variable">
                    {
                        props.openMenu ? (
                            <>
                                <div className="column is-2 is-narrow">
                                    <div className={"scrollbar " + (props.openMenu ? "menu-show" : "menu-hidden")} id="scroll-menu">
                                        <AdminMenu openMenu={ props.openMenu } />
                                        <div className="force-overflow"></div>
                                    </div>
                                </div>
                                <div className="column">
                                    { props.children }
                                </div>
                            </>
                        ) : (
                        <div className="column">
                            
                            { props.children }
                        </div>
                        )
                    }
                </div>
            </section>
        </section>
    )
}