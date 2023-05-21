import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header backgroundColor="blue" />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}
