const Leaderboard = (props) => {
    const clickHandler = () => {
        props.display();
        props.reset();
    }
    return (
        <div className="leaderboard body-item">
            <div className="title">Leaderboard</div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time (seconds)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => (
                        <tr key={item.time}>
                            <td>{item.name}</td>
                            <td>{item.time.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button id="play-again" onClick={clickHandler}>Play Again</button>
        </div>
    )
}

export default Leaderboard