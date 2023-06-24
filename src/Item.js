const Item = (props) => {
    return (
        <div>
            <div>{props.item.name}</div>
            <img src={props.item.image} alt={props.item.name}/>
        </div>
    )
}

export default Item;