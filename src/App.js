import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cardiology from './Forms/cardiology_opassess';
import Diet from './Forms/dietetics_opassess';
import Endocrine from './Forms/endocrine_opassess';
import Endocrine1 from './Components/endocrine_opassess1';
import Ent from './Forms/ent_opassess';
import Genmed from './Forms/genmed_opassess';
import Gensurg from './Forms/gensurg_opassess';
import MaritalStatus from './Components/MaritalStatus';
import Login from './Login';
import React from 'react';

function App() {
  return (
    
        <div>
            <Login />
        </div>

  );
}

export default App;
