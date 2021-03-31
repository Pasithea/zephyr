import React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import { BreathContextProvider } from './context/Context';
import './assets/stylesheets/main.scss';

const App = () => {
  return (
      <div>
    <BreathContextProvider>
        <MainContainer/>
    </BreathContextProvider>
      </div>
  )
}

export default App;