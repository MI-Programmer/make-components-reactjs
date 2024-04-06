import "./App.css";

import Accordian from "./Components/Accordian/Accordian";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import LightDarkMode from "./Components/LightDarkMode/LightDarkMode";
import LoadMoreData from "./Components/LoadMoreData/LoadMoreData";
import ModalTest from "./Components/ModalPopup/ModalTest";
import QRCodeGenerator from "./Components/QRCodeGenerator/QRCodeGenerator";
import Search from "./Components/Search/Search";
import StarSlider from "./Components/StarSlider/StarSlider";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import TreeView from "./Components/TreeView/TreeView";
import menus from "./Components/TreeView/data";

function App() {
  return (
    <div className="App">
      {/* Accordian Components */}
      <Accordian />

      {/* Image Slider Components */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />

      {/* Star Slider Components */}
      <StarSlider numberOfStars={10} />

      {/* Load More Data Component */}
      <LoadMoreData />

      {/* ModalPopup Component */}
      <ModalTest />

      {/* Tree View Component */}
      <TreeView menus={menus} />

      {/* QR Code Generator */}
      <QRCodeGenerator />

      {/* Search Component */}
      <Search />

      {/* LightDarkMode Component */}
      <LightDarkMode />

      {/* TicTacToe Compoenent */}
      <TicTacToe />
    </div>
  );
}

export default App;
