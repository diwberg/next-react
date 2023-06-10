export default function Aposta(props) {

    return (
        <>
            <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                color: "white",
                margin: "5px"
            }} key={props.key} >
                {props.aposta}
            </div>
        </>
    )
}