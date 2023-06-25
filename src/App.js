import { useState } from "react";
import StartPopup from "./StartPopup";
import Image from "./Image";
import mainImage from './images/world-pieces.jpg'
import bridge from './images/bridge.png'
import castle from './images/castle.png'
import rooster from './images/rooster.png'
import Header from "./Header";
import Miniitems from "./MiniItems.js";
import { checkCoordinates, time, addToLeaderboard, getLeaderboard} from "./firebase";
import './styles.css'
import WinPopup from "./WinPopup";
import Leaderboard from "./Leaderboard";


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
  const [showLB, setShowLB] = useState(false);
  const [itemsFound, setItemsFound] = useState(0);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [gameInProgress, setGameInProgress] = useState(false);

  const [leaderboard, setLeaderboard] = useState();

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
    reset();
    setStartTime(time.now());
    setGameInProgress(true);
  }

  const reset = () => {
    setThings(things.map((item) => ({...item, found: false})))
    setItemsFound(0);
  }

  const addTime = async (name, time) => {
    await addToLeaderboard(name, time);
  }

  const showHomeElements = () => {
    setShowStart(true);
    setShowImage(false);
    setShowLB(false)
  }

  const showImageElements = () => {
    setShowStart(false);
    setShowImage(true);
    setShowLB(false)
  }

  const showLBElements = async () => {
    await getLB();
    setShowStart(false);
    setShowImage(false);
    setShowLB(true)
  }

  const getLB = async () => {
    setLeaderboard(await getLeaderboard());
  }

  return (
    <div>
      <Header toggle={showHomeElements} showButton={showImage} gameOver={!gameInProgress}></Header>
      {showStart ? 
        <StartPopup items={things} 
                    toggleShow={showImageElements} 
                    start={startTimer} 
                    time={startTime}
                    gameInProgress={gameInProgress}>
                    
        </StartPopup> : null}

      {showImage ? 
        <Image img={imageURL} show={showImage}>
        </Image> : null}

      <Miniitems items={things} clickHandler={checkClick}></Miniitems>
      {itemsFound === things.length && !showLB ? 
        <WinPopup time={endTime - startTime}
                  add={addTime}
                  showLB={showLBElements}
                  showHome={showHomeElements}
                  reset={reset}></WinPopup> : null}

      {showLB ? 
        <Leaderboard items={leaderboard}
                     display={showHomeElements}
                     reset={reset}></Leaderboard> : null}

    </div>
  );
}

export default App;
