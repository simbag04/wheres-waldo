import { useState } from "react";
import StartPopup from "./StartPopup";
import Image from "./Image";
import mainImage from './images/world-pieces.jpg'
import bridge from './images/bridge.png'
import castle from './images/castle.png'
import rooster from './images/rooster.png'
import Header from "./Header";
import Miniitems from "./MiniItems.js";
import { checkCoordinates } from "./firebase";
import './styles.css'
import WinPopup from "./WinPopup";
import { time } from "./firebase";



function App() {
  const imageURL = mainImage;
  const [things, setThings] = useState([
    {
      name: "Castle",
      found: false,
      image: castle
    },
    {
      name: "Rooster",
      found: false,
      image: rooster
    },
    {
      name: "Bridge",
      found: false,
      image: bridge
    }
  ])

  const [showStart, setShowStart] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [itemsFound, setItemsFound] = useState(0);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [gameInProgress, setGameInProgress] = useState(false);

  const toggleDisplay = () => {
    setShowStart(!showStart);
    setShowImage(!showImage);
  }

  const setFound = (name) => {
    let objects = things.filter((thing) => thing.name === name);
    objects[0].found = true;

    setThings(things.map((thing) => thing.name === name ? objects[0] : thing));
    if (itemsFound + 1 === things.length) {
      setEndTime(time.now());
      setGameInProgress(false);
    }
    setItemsFound(itemsFound + 1);
  }

  const checkClick = async (name, x, y) => {
    let good = document.querySelector("#good");
    let bad = document.querySelector("#bad");
    if (await checkCoordinates(name, x, y)) {
      good.style.display = "block"
      setFound(name);
      setTimeout(function() {
        good.style.display = "none";
      }, 1000)
    } else {
      bad.style.display = "block";
      setTimeout(function() {
        bad.style.display = "none";
      }, 1000)

    }
  }

  const startTimer = () => {
    setStartTime(time.now());
    setGameInProgress(true);
  }

  return (
    <div>
      <Header toggle={toggleDisplay} showButton={showImage} gameOver={!gameInProgress}></Header>
      <StartPopup items={things} 
                  show={showStart} 
                  toggleShow={toggleDisplay} 
                  start={startTimer} 
                  time={startTime}
                  gameInProgress={gameInProgress}>
                  
      </StartPopup>
      <Image img={imageURL} show={showImage}></Image>
      <Miniitems items={things} clickHandler={checkClick}></Miniitems>
      {itemsFound === things.length ? 
        <WinPopup time={endTime - startTime}></WinPopup> : null}
    </div>
  );
}

export default App;
