const Item = (props) => {
    return (
        <div class="item">
            <img src={props.item.image} alt={props.item.name}/>
            <div className={props.item.found ? "green" : "red"}>{props.item.name}</div>
        </div>
    )
}

export default Item;