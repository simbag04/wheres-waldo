import GoodFeedback from "./GoodFeedback";
import BadFeedback from "./BadFeedback";
import Timer from "./Timer";

const Header = (props) => {
    return (
        <div className="header">
            <div className="title">Where's Waldo?</div> 
            <Timer gameOver={props.gameOver}></Timer>
            {props.showButton ? 
                <button onClick={props.toggle} type="button">Show Items</button> : null}
            <GoodFeedback></GoodFeedback>
            <BadFeedback></BadFeedback>
        </div>
    )
}

export default Header