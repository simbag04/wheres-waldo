import { checkCoordinates } from "./firebase";
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

        console.log(await checkCoordinates(itemName, x, y));
        div.style.display = "none"
    }

    return (
        <div id="mini-items">
            {props.items.map((item) => {
               return <div key={item.name}>
                        <button id={item.name} onClick={clickHandler}>{item.name}</button>
                    </div>
            })}
        </div>
    )
}

export default Miniitems;