import React from 'react'

function Contect() {
    return (
        <div id='contact'>
            <h1>CONTATOS</h1>
            <form>
            <input type='text' placeholder="Seu Nome" required />
            <input type='email' placeholder="Email" required />
            <textarea placeholder='Seu Comentario...' />
            <input type='submit' value='Enviar' />
            </form>            
        </div>
    )
}

export default Contect