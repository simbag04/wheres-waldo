import Item from "./Item";

const StartPopup = (props) => {
    const startHandler = () => {
        props.toggleShow();
        if (!props.gameInProgress) props.start();
    }
    return (
        <div className="start-popup-menu body-item">
            <div className="title">Items to Find</div>
            <div className="items">
                {props.items.map((item) => {
                    return <Item key={item.name} item={item}></Item>
                })}
            </div>
            <button onClick={startHandler} id="start-button">Go!</button>
        </div>
    )
}

export default StartPopup