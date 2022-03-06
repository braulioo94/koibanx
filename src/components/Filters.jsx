import React, {useContext } from "react";
import storeContext from "../useContext/storeContext";
import '../App';




const Filters = () =>{

        const storesContext = useContext(storeContext);
        const {setActivated,setOrderedFor,orderedFor,activated} = storesContext ;


    const onChange = e =>{
        //Save selected filters
            if(e.target.name=='orderedFor') return setOrderedFor(e.target.value);
            setActivated(e.target.value);
    }

 
        return(
            <div className="content-select">
                <h4>Seleccione por lo que desea ordenar</h4>
            <div>
                    <select value={orderedFor} name='orderedFor' onChange={onChange}>
                        <option value="All">Todos</option>
                        <option value="name">Name</option>
                        <option value="cuit">CUIT</option>
                    </select>
                    <select value={activated} name='activated' onChange={onChange}>
                        <option value="All">Todos</option>
                        <option value="Active">Activo</option>
                        <option value="Disabled">Inactivo</option>
                    </select>
                </div>
            </div>
        )


}


export default Filters;