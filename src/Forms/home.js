import Sidebar from '../Components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cardiology from '../Forms/cardiology_opassess';
import Diet from '../Forms/dietetics_opassess';
import Endocrine from '../Forms/endocrine_opassess';
import Endocrine1 from '../Components/endocrine_opassess1';
import Ent from '../Forms/ent_opassess';
import Genmed from '../Forms/genmed_opassess';
import Gensurg from '../Forms/gensurg_opassess';
import MaritalStatus from '../Components/MaritalStatus';


function Home() {
    return (

            <div  className="main">  
                <Router>
                    <Sidebar />
                    <Routes>
                        <Route path='/cardioassess' element ={<Cardiology />} />
                        <Route path='/dietassess' element ={<Diet />} />
                        <Route path='/endocrineassess' element ={<Endocrine />} />
                        <Route path='/ENTassess' element ={<Ent />} />
                        <Route path='/genmedassess' element ={<Genmed />} />
                        <Route path='/gensurgassess' element ={<Gensurg />} />
                    </Routes>
                </Router>
            </div>
    );
}

export default Home;