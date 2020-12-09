import "./App.css";
import SideBar from "./SideBar/SideBar";
import ChatBox from "./ChatBox/ChatBox";

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
