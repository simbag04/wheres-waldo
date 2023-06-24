const Image = (props) => {
    const showCoordinates = (e) => {
        let bounds = document.querySelector("#image").getBoundingClientRect();
        alert((e.clientX - bounds.left) + " " + (e.clientY - bounds.top))
    }
    return (
        <>
            {props.show ? 
                <img id="image" src={props.img} alt="main" onClick={showCoordinates}></img> : null }
        </>
    )
}

export default Image;