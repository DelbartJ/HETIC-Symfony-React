import React, {useState} from "react";
import Card from "./Card";
import FormCard from "./FormCard";
import FormRegister from "./FormRegister";


function App() {

    const [cards, setCards] = useState([
        {
            id: 1,
            titre: "Code Geass",
            message: "C Vraiment cool"
        },
        {
            id: 2,
            titre: "Tales Of Arise",
            message: "Game of the year"
        },
        {
            id: 3,
            titre: "GUNDAM",
            message: "Gumdamuuu"
        },
    ]);

    return (
        <div className='container my-5'>

            {/* <FormCard setCards={setCards}/> */}

            <FormRegister/>

            {cards.map((card) => {
                    return(
                    <Card titre={card.titre} message={card.message} key={card.id}/>
                    )
                }
            )}
        </div>
    );
}
export default App;
