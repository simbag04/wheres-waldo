import { useEffect, useState } from "react"

const Timer = (props) => {
    const [time, setTime] = useState(0);

    const formatTime = (t) => {
        let hours = Math.floor(t/1000/60/60);
        
        let hoursZero = (hours < 10) ? "0" : "";
        let minutes = Math.floor(t/1000/60) % 60;
        let minutesZero = minutes < 10 ? ":0" : ":";
        let seconds = Math.floor(t/1000) % 60;
        let secondsZero = (seconds < 10) ? ":0" : ":";

        let str = String(hoursZero) + String(hours) + minutesZero + String(minutes) + secondsZero + String(seconds);
        return str;
    }
    useEffect(() => {
        let interval;
        if (!props.gameOver) {
            setTime(0);
            interval = setInterval(() => setTime(time => time + 1000), 1000);
        } 
        
        return () => {
            setTime(0)
            clearInterval(interval);
        }
    }, [props.gameOver])

    return <div>{formatTime(time)}</div>
}

export default Timer