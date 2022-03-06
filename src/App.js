
import './App.css';
import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import TableStore from './components/TableStore'
import StoreState  from './useContext/storeState';




function App() {
  return (
    <StoreState>
        <div className="App">
          <SearchBar />
          <TableStore />
        </div>
    </StoreState>
    
  );
}

export default App;
