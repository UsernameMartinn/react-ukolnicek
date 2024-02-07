import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function NovyUkol( {pridejUkol} ) {

    const [ukol, nastavUkol] = useState('');


    return (
        <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={ukol} 
        onChange={(udalost) => nastavUkol(udalost.target.value) }/>

        
        {/*<button onClick={() => pridejUkol(ukol)}>Přidej úkol</button>*/}
        <Button variant="contained" onClick={() => pridejUkol(ukol)}>Přidej úkol</Button>
        </>
    )
}