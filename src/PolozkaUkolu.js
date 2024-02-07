import { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PolozkaUkolu( {ukol, poradi, fceSmazat, fceSpln} ) {

    return (
        <>
        <span>{poradi}. </span>
        {!ukol.splneno && <span className="text-ukolu">{ukol.text}</span>}
        {ukol.splneno && <span className="splneny-ukol">{ukol.text}</span>}
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => fceSmazat(poradi)}>Smazat</Button>
        <Button variant="contained" color="success" onClick={() => fceSpln(poradi)}>Hotovo</Button>
        <br/>
        </>
    )
}