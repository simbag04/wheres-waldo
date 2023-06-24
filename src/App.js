import { useState } from "react";
import StartPopup from "./StartPopup";
import Image from "./Image";
import mainImage from './images/world-pieces.jpg'
import bridge from './images/bridge.png'
import castle from './images/castle.png'
import rooster from './images/rooster.png'
import Header from "./Header";
import Miniitems from "./MiniItems.js";
import './styles.css'


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

  const toggleDisplay = () => {
    setShowStart(!showStart);
    setShowImage(!showImage);
  }

  const setFound = (name) => {
    let objects = things.filter((thing) => thing.name === name);
    objects[0].found = true;

    setThings(things.map((thing) => thing.name === name ? objects[0] : thing));
  }

  return (
    <div>
      <Header toggle={toggleDisplay} showButton={showImage}></Header>
      <StartPopup items={things} show={showStart} toggleShow={toggleDisplay}></StartPopup>
      <Image img={imageURL} show={showImage}></Image>
      <Miniitems items={things}></Miniitems>
    </div>
  );
}

export default App;
