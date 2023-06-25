const Miniitems = (props) => {
    const extractPxVal = (str) => {
        return Number(str.substring(0, str.length - 2));
    }

    const clickHandler = async (e) => {
        let itemName = e.target.id;

        let div = document.querySelector("#mini-items");
        let bounds = document.querySelector("#image").getBoundingClientRect();
        let left = extractPxVal(div.style.left)
        let x = (left - bounds.left)/(bounds.right - bounds.left);
        let top = extractPxVal(div.style.top)
        let y = (top - bounds.top - Number(div.classList[0]))/(bounds.bottom - bounds.top);
        
        div.style.display = "none"

        props.clickHandler(itemName, x, y);
    }

    return (
        <div id="mini-items">
            {props.items.map((item) => {
                if (item.found === false) {
                    return (
                        <div key={item.name}>
                            <button id={item.name} onClick={clickHandler}>{item.name}</button>
                        </div>
                   )
                } else return null;
            })}
        </div>
    )
}

export default Miniitems;