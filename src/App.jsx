import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <div className="flex items-center justify-between">
          <h1 className="py-2 text-2xl ml-1">Welcome Dear User</h1>
        </div>
        <div className="appBody flex justify-between">
          <SideBar />

          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default App;
