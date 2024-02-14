import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className='contendor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                className='nuevo-presupuesto' 
                type="text" 
                placeholder='añade tu presupuesto' 
                value={presupuesto}
                onChange={e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value="Añadir"/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto