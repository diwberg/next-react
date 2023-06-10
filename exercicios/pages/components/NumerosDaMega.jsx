import { useState } from "react"

export default function NumerosDaMega({ apostasd }) {

    const [apostas, setApostas] = useState([1,4,8])

    
    

    if (isNaN(apostasd)) {
        apostasd = 6
    }

    if (apostasd < 6) {
        apostasd = 6
    }
    if (apostasd > 60) {
        apostasd = 60
    }

    let numero = parseInt(Math.random() * 60) + 1




    return (
        <>
            {
                apostas.map((aposta,i) => {
                    return (
                    <div key={i} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "black",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        color: "white",
                        margin: "0 3px"
                    }}>
                        {aposta}
                    </div> )
                })
            }

        </>
    )
}