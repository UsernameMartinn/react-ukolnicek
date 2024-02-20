import NovyUkol from "./NovyUkol";
import { useState, useEffect } from "react";
import PolozkaUkolu from "./PolozkaUkolu";
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from "@mui/material";


export default function Ukolnicek(poradi) {

    //const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol']);

    const [barvaTlacitka, nastavBarvuTlacitka] = useState("blue");

    const [seznamUkolu, nastavSeznamUkolu] = useState([
        { text: 'Novy ukol', splneno: false },
        { text: 'dalsi ukol', splneno: false },
        { text: 'splneny ukol', splneno: true }
    ])

    function nahodnaSlozkaBarvy() {
        return Math.random() * 255;
    }

    function pridejUkol(novyUkol) {
        //let barva = "rgb(" + nahodnaSlozkaBarvy() + ", " + nahodnaSlozkaBarvy() + ", " + nahodnaSlozkaBarvy() + ")"
        let barva = `rgb(${nahodnaSlozkaBarvy()}, ${nahodnaSlozkaBarvy()}, ${nahodnaSlozkaBarvy()})`

        nastavBarvuTlacitka(barva)

        let novyUkolObj = { text: novyUkol, splneno: false };
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
    }

    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu)
    }

    function splneno() {
        /*let pocetSplnenych = 0
        for (let ukol of seznamUkolu) {
            if (ukol.splneno) {
                pocetSplnenych ++
            }
        }
        */
       let pocetSplnenych = seznamUkolu.filter(ukol => ukol.splneno).length

        
        return pocetSplnenych
        /*for(let i = 0; i <= seznamUkolu.length; i++) {
            if (seznamUkolu[i].splneno == true) {
                pocetSplnenych = pocetSplnenych + 1
            }
            
        }
        return pocetSplnenych
        */
    }


    /*
    function splnUkol(poradiUkolu) {
         let upravenySeznamUkolu = [...seznamUkolu];
         if (upravenySeznamUkolu[poradiUkolu].splneno == true) {
             upravenySeznamUkolu[poradiUkolu].splneno = false;
         } else {
             upravenySeznamUkolu[poradiUkolu].splneno = true;
         }
         nastavSeznamUkolu(upravenySeznamUkolu);
     }
     */

    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu[poradiUkolu].splneno = !upravenySeznamUkolu[poradiUkolu].splneno
        nastavSeznamUkolu(upravenySeznamUkolu);
    }



    return (
        <>
            <NovyUkol pridejUkol={pridejUkol} />
            <br />
            <Typography variant="body1">{seznamUkolu.map((ukol, poradi) => <PolozkaUkolu ukol={ukol} poradi={poradi} fceSmazat={smazatUkol} fceSpln={splnUkol}></PolozkaUkolu>)}</Typography>

            <Typography variant="body1">Počet úkolů: {seznamUkolu.length}</Typography>
            <Typography variant="body1">Počet splněných úkolů: {splneno()}</Typography>
            <Typography variant="body1">Počet nesplněných úkolů: {seznamUkolu.filter(ukol => !ukol.splneno).length}</Typography>

            <Button variant="contained" style={{backgroundColor : barvaTlacitka}} onClick={() => pridejUkol("novy ukol")}>Přidej náhodný úkol</Button>
        </>
    )
}