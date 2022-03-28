import Navbar from "./components/navbar";
import Footer from "./components/Footer/footer";
import Part2 from "./components/contents/part2";
import Part3 from "./components/contents/part3";
import Part4 from "./components/contents/part4";
import Part1 from "./components/contents/part1";
import Home from "./components/Home";
import Sidebar from "react-sidebar";
import { useState } from "react";
import SidebarContent from "./components/sidebar";
function App() {
  const [collapsed, setCollapsed] = useState(false)
  const mql = window.matchMedia(`(min-width: 800px)`);
  const handle = (e) => {
    setCollapsed(!collapsed)
  }
  return (
    <div>
      <Sidebar
            sidebar={<SidebarContent handle={handle} />}
            open={collapsed}
            docked={collapsed && mql.matches}
            onSetOpen={handle}
            styles={{ sidebar: { background: "white" }, root: { top:  0 } }}>
      <Home/>
      <Navbar/>
      <Part1 />
      <Part2 handle={handle}/>
      <Part3 />
      <Part4 />
      <img src='map.jpg' width="100%" />
      <Footer/>
      </Sidebar>
    </div>
  );
}

export default App;
