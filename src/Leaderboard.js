const Leaderboard = (props) => {
    const clickHandler = () => {
        props.display();
        props.reset();
    }
    return (
        <div>
            Leaderboard
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => (
                        <tr key={item.time}>
                            <td>{item.name}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button id="play-again" onClick={clickHandler}>Play Again</button>
        </div>
    )
}

export default Leaderboard