import React from 'react';
import Sidebar from './Sidebar';

import './App.css';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  

  return (
    
    <div className="app">
       {/* Sidebar */}
       <Sidebar/>
       {/* Feed */}
       
       <Feed/>
       {/* Widgets */}
       
       <Widgets/>
    </div>
  )
}

export default App;
