const Header = (props) => {
    return (
        <div className="header">
            <div className="title">Where's Waldo?</div> 
            {props.showButton ? 
                <button onClick={props.toggle} type="button">Show Items</button> : null}
        </div>
    )
}

export default Header