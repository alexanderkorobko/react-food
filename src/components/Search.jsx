import {useState} from 'react';

function Search({cb}){

    const[value, setValue]=useState('');

    handleKey=(e)=>{
        if(e.key==='Enter'){
            cb(value);
        }
    }

 
    return(
        <div className="row">
            <div className="input-field col s12">
                <input type="search" 
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={()=>setValue(e.target.value)}
                    value={value}
                />
                <button className="btn" style={{position: 'absolute', top: 0, right: 0}} onClick={()=>cb(value)}>Search</button>
            </div>
        </div>
    )
}

export default Search