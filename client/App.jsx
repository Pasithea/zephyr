import React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import { BreathContextProvider } from './context/Context';
import './assets/stylesheets/main.scss';
import Animation from "./components/Animation/Animation";


const App = () => {
  return (
    <BreathContextProvider>
        <MainContainer/>

    </BreathContextProvider>
  )
}



export default App;