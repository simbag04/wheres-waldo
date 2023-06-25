import GoodFeedback from "./GoodFeedback";
import BadFeedback from "./BadFeedback";
import Timer from "./Timer";

const Header = (props) => {
    return (
        <div className="header">
            <div className="title">Where's Waldo?</div> 
            {props.showButton ? 
                <button onClick={props.toggle} type="button">Show Items</button> : null}
            <GoodFeedback></GoodFeedback>
            <BadFeedback></BadFeedback>
            <Timer gameOver={props.gameOver}></Timer>
        </div>
    )
}

export default Header