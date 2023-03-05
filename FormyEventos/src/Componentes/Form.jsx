import { useState } from 'react'
import FormCard from './FormCard'

const Form = () => {
    const [user, setUser] = useState({
        email: '',
        pass: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.pass.length > 6){
         setShow(true)
         setErr(false)
        } else setErr(true)
    }

  return ( 
    <>
        <form onSubmit={handleSubmit}>
            <h1>{user.email}</h1>
            <label>Email</label>
            <input type="email" onChange={(event) => setUser({...user, email: event.target.value})}/>
            <h1>{user.pass}</h1>
            <label>password</label>
            <input type="password" onChange={(event) => setUser({...user, pass: event.target.value})}/>
            {err ? 'La contraseña no es correcta' : null}
            {err && 'La contraseña no es correcta'}
            <button>Enviar</button>
        </form>
{/* Se puede hacer otro componente para mostrar la info como por ejemplo FormCard, no olvidar pasar las props */}
        {
            show
            ? 
           <FormCard user={user}/>
            :
            null
        }
        {
            show
            && 
            <>
                <h4>Se ha logueado con éxito!</h4>
                <h4>Email: {user.email}</h4>
                <h4>Pass: {user.pass}</h4>
            </>
        }


    </>
  )
}

export default Form