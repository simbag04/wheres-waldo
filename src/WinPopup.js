const WinPopup = (props) => {

    const addToLeaderboard = () => {
        props.reset();
        props.add(document.querySelector("#name-input").value, props.time);
        props.showLB();
    }
    return (
        <div id="win-popup">
            <div>You won! {props.time}</div>
            <label htmlFor="name-input">Enter your name here to be added to the leaderboard!</label>
            <input id="name-input" type="text" required></input>
            <button type="button" onClick={addToLeaderboard}>Submit</button>
        </div>
    )
}

export default WinPopup