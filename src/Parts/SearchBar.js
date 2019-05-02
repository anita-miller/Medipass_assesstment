import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchBar = (props)=>{
    return(
        <div>
            <TextField style={{padding: 20}}
                        id="searchInput"
                        placeholder="Find your pie"
                        margin="normal"
                        onChange={props.onSearchChange}
            />  
        </div>
    )
}


export default SearchBar