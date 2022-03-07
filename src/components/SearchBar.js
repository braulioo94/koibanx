import React, {useContext} from "react";
import storeContext from "../useContext/storeContext";
import Filters from "./Filters";
import '../App';


const SearchBar = () =>{

    const storesContext = useContext(storeContext) ;
    const {setEnteredSearchBar,enteredSearchBar,setCurrentPage} = storesContext ;  


  const onChangeSearch = e =>{
    setCurrentPage(0);
    setEnteredSearchBar(e.target.value);
    //Filter the information by ID and/or CUIT and/or Business Name.
    console.log(`axios.get(https://api.koibanx.com/stores/search?q={"$or": [{"id": ${e.target.value}}, {"name": ${e.target.value}}, {"cuit": ${e.target.value}}]}`);
 } 

    return(       
            <div className="containerSearchAndFilters">
                <input
                    type='text'
                    placeholder="Ingrese lo que desea buscar"
                    value={enteredSearchBar}
                     onChange={onChangeSearch} 
                >          
                </input>  
                <Filters />
            </div>
)  


}



export default SearchBar;