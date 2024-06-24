import React from 'react';
import './App.css';
import SouthParkModule from "./components/SouthParkModule";
import ChangingColorButton from "./components/ChangingColorButton";


const App = () => {

  return (
    <div>
      <SouthParkModule name={'Kyle'}
                       lastname={'Broflovski'}
                        img={'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'}
      />
        <SouthParkModule name={'Sten'}
                         lastname={'Marsh'}
                         img={'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'}
        />
        <SouthParkModule name={'Eric'}
                         lastname={'Cartman'}
                         img={'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'}>
                    Fat.
        </SouthParkModule>

        <ChangingColorButton>Rainbow's vomiting</ChangingColorButton>

    </div>
  );
}

export default App;

