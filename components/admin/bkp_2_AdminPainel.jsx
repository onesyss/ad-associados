import Link from 'next/link'
import AdminMenu from './AdminMenu'
import AdminPesquisar from './AdminPesquisar'
//ok
export default function AdminPainel(props) {
    //console.log(openMenu)
    return (
        <section>
            <section className="section mx-0 my-0 px-0 py-0">
            <div className="columns is-variable is-centered is-0">
                <div className="column is-half">
                    <AdminPesquisar />
                </div>
            </div>
                <div className="columns is-variable is-0 mx-0 my-0 px-0 py-0">
                    <aside className="column is-one-fifth is-narrow">
                        <div className={"scrollbar  " + (props.openMenu ? "menu-show" : "menu-hidden")} id="scroll-menu">
                            <AdminMenu openMenu={ props.openMenu } />
                            <div className="force-overflow"></div>
                        </div>
                    </aside>    
                    <main className="column is-0 is-narrow">
                        {/* <AdminPesquisar /> */}
                        { props.children }
                    </main>
                </div>
            </section>
        </section>
    )
}