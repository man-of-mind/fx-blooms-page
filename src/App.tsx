import React from 'react';
import Hero from './Components/Hero/Hero';
import SideBar from './Components/SideBar/SideBar';
import TopBar from './Components/TopBar/TopBar';

function App() {
  return (
    <div>
      <main>
        <TopBar />
        <SideBar />
        <Hero />
      </main>
    </div>
  );
}

export default App;
