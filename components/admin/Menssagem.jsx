import { useState } from 'react'

export default function Menssagem(props){

    if (!props.visible){
        return null
    }

    return(
        <div className="message is-primary">
            <div className="message-header">
                <p>Aviso !</p>
                <button onClick={ props.close } className="delete" area-label="delete"></button>
            </div>
            <div className="message-body">
                { props.children }
            </div>
        </div>
    )
}