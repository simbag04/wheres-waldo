import { useState } from "react";
import StartPopup from "./StartPopup";
import Image from "./Image";
import mainImage from './images/world-pieces.jpg'
import bridge from './images/bridge.png'
import castle from './images/castle.png'
import rooster from './images/rooster.png'
import Header from "./Header";


function App() {
  const imageURL = mainImage;
  const [things, setThings] = useState([
    {
      name: "castle",
      found: false,
      image: castle
    },
    {
      name: "rooster",
      found: false,
      image: rooster
    },
    {
      name: "bridge",
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

  return (
    <div>
      <Header toggle={toggleDisplay} showButton={showImage}></Header>
      <StartPopup items={things} show={showStart} toggleShow={toggleDisplay}></StartPopup>
      <Image img={imageURL} show={showImage}></Image>
    </div>
  );
}

export default App;
