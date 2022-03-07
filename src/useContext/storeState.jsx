import storeContext from "./storeContext";
import React,{useState,useContext} from 'react';
import data from '../mocks/dataMocks';

const StoreState = props =>{


    const [ stores, setStores]= useState([]);
    const [rowsPerPage,setRowsPerPage]=useState();
    const[currentPage, setCurrentPage] = useState();
    const [enteredSearchBar,setEnteredSearchBar]= useState('');
    const [activated,setActivated]=useState(false);
    const [orderedFor, setOrderedFor]=useState('');

    const getAllStore = () =>{
        const consultApi = async () =>{
            setStores(data);
            setRowsPerPage(10);
            setCurrentPage(0);
            console.log('axios.get(https://api.koibanx.com/stores');
            /* await axios.get('https://api.koibanx.com/stores')
            .then(response=>{
                setGetStore(response.data)
                setRowsPerPage(response.rowsPerPage)
                setCurrentPage(response.page)
            }) 
            .catch(error=>{
                return console.log(error);
            })*/
        }
        consultApi();
    }

    return(

        <storeContext.Provider
            value={{
                setStores,
                getAllStore,
                setCurrentPage,
                setEnteredSearchBar,
                setActivated,
                setOrderedFor,
                currentPage,
                stores,
                rowsPerPage,
                enteredSearchBar,
                activated,
                orderedFor
                
            }} >
            
            {props.children}
            
        </storeContext.Provider>
    )
}


export default StoreState;