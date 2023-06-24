import Item from "./Item";

const StartPopup = (props) => {
    return (
        <>
            { props.show ? (
                <div className="start-popup-menu">
                    <div className="title">Items to Find</div>
                    <div className="items">
                        {props.items.map((item) => {
                            return <Item key={item.name} item={item}></Item>
                        })}
                    </div>
                    <button onClick={props.toggleShow} id="start-button">Go!</button>
                </div>) : null }
        </>
    )
}

export default StartPopup