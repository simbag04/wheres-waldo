import circle from './images/circle-outline.svg'
const Image = (props) => {
    const showCoordinates = (e) => {
        let div = document.querySelector("#mini-items");
        div.style.display = "block"
        div.style.left = e.pageX + "px";
        div.style.top = e.pageY + "px";
        div.className = ((e.pageY - e.clientY) + "");
    }
   
    return (
        <>
            {props.show ? 
                <img id="image" 
                    style={{cursor: `url("${circle}") 50 50, pointer`}}
                    src={props.img} 
                    alt="main" 
                    onClick={showCoordinates}
                    ></img> : null }
        </>
    )
}

export default Image;