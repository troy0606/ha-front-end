import store from "./store";
import { Provider } from "react-redux";
import "./App.scss";
import { Outlet } from "react-router-dom";
import HeroLayout from "./layout/hero";


export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeroLayout>
          <Outlet />
        </HeroLayout>
      </div>
    </Provider>
  );
}
