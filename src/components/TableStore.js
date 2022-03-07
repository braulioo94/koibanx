import React,{useContext, useEffect} from 'react'
import storeContext from '../useContext/storeContext'

const TableStore = () => {

        const storesContext = useContext(storeContext) ;
        const {stores,getAllStore,rowsPerPage,currentPage,setCurrentPage,enteredSearchBar,activated,orderedFor} = storesContext ;  
        
         useEffect(() =>{
                 //Fetch all stores from the database
                getAllStore();
        },[]) ;

        const filteredStores= () =>{
                let filtered ;
                if(enteredSearchBar.length===0)  filtered= stores;
                 //console.log('https://api.koibanx.com/stores?');
                else {filtered =stores.filter(store=>store.name.toLowerCase().includes(enteredSearchBar.toLowerCase())||store.cuit.includes(enteredSearchBar)||store.id.includes(enteredSearchBar))};
                  
                //sort by active
                if(activated=='Active')filtered =filtered.filter(actives =>actives.active===true);
                if(activated=='Disabled')filtered =filtered.filter(actives =>actives.active===false);
                //sort by name
                if(orderedFor=='name'){filtered.sort((a,b)=>{
                        let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                        if (fa < fb) return -1;  
                        if (fa > fb) return 1;
                        return 0;
                })}

                //sort by name
                if(orderedFor=='cuit'){filtered.sort((a,b)=>{
                        let fa = a.cuit.toLowerCase(),
                        fb = b.cuit.toLowerCase();
                        if (fa < fb) return -1;  
                        if (fa > fb) return 1;
                        return 0;
                })}                   
                return filtered.slice(currentPage,currentPage+rowsPerPage);
        }


        const nextPage=() =>{
                //Check for more items on the next page
                if(stores.filter(store=>store.name.includes(enteredSearchBar)||store.cuit.includes(enteredSearchBar)||store.id.includes(enteredSearchBar)).length>currentPage+rowsPerPage);
                setCurrentPage(currentPage+rowsPerPage);
        }

        const previousPage = () =>{
                //Check that it is not the first page
                if(currentPage>0) setCurrentPage(currentPage-rowsPerPage);
                
        }


        const dateCreated=(date) =>{

                let dateCreated = date;
                const [year, month, day] = dateCreated.split("-");
                let orderedDate = `${day}/${month}/${year}`;

                return  orderedDate;  
              }
    return ( 
        
        <>
            <h1> Listado de tiendas Koibanx</h1>
            <hr />

            <button
                onClick={previousPage}
            >
                    Anteriores
            </button>
            <button
                onClick={nextPage}
            >
                    Siguientes
            </button>

            <table>
                 <thead>
                         <tr>
                                 <th style={{width:100}}>ID</th>
                                 <th style={{width:100}}>Comercio</th>
                                 <th style={{width:100}}>CUIT</th>
                                 <th style={{width:100}}>Concepto 1</th>
                                 <th style={{width:100}}>Concepto 2</th>
                                 <th style={{width:100}}>Concepto 3</th>
                                 <th style={{width:100}}>Concepto 4</th>
                                 <th style={{width:100}}>Concepto 5</th>
                                 <th style={{width:100}}>Concepto 6</th>
                                 <th style={{width:100}}>Balance actual</th>
                                 <th style={{width:100}}>Activo</th>
                                 <th style={{width:100}}>Ultima Venta</th>
                         </tr>
                 </thead>
                 
                        {stores.length>0
                                ?
                                        <tbody>
                                                {filteredStores().map(store =>(
                                                        <tr key={store.name}>
                                                                <td>{store.id}</td>
                                                                <td>{store.name}</td>
                                                                <td>{store.cuit}</td>
                                                                <td>{store.concept1}</td>
                                                                <td>{store.concept2}</td>
                                                                <td>{store.concept3}</td>
                                                                <td>{store.concept4}</td>
                                                                <td>{store.concept5}</td>
                                                                <td>{store.concept6}</td>
                                                                <td style={{color:store.currentBalance>10000?'green':'red'}}>{store.currentBalance}</td>
                                                                <td>{store.active?'Activo':'Desactivado'}</td>
                                                                <td>{dateCreated(store.lastSale.slice(0,-10))}</td>
                                                        </tr>
                                                ))}
                                        </tbody>
                                :
                                        <h2>Loading....</h2>
                                }
            </table>

        </>
    );
}

export default TableStore;