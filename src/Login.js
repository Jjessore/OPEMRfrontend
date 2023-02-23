import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cardiology from './Forms/cardiology_opassess';
import Diet from './Forms/dietetics_opassess';
import Endocrine from './Forms/endocrine_opassess';
import Endocrine1 from './Components/endocrine_opassess1';
import Ent from './Forms/ent_opassess';
import Genmed from './Forms/genmed_opassess';
import Gensurg from './Forms/gensurg_opassess';
import Home from './Forms/home';


import axios from './api/axios';
const LOGIN_URL = '/manager';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('User : ' + user)
        console.log('Password : ' + pwd)

        try {
                if(user==='doctor' && pwd==='doctor')
                {
                    setSuccess(true);
                }


            //const response = await axios.get(LOGIN_URL,
            //    JSON.stringify({ user, pwd }),
            //    {
            //        headers: { 'Content-Type': 'application/json' },
            //        withCredentials: true
            //    }
            //);


            //console.log("http://localhost:8000/manager",
            //{ headers:{ authorization: 'Basic ' + window.btoa(user + ":" + pwd),
            //            withCredentials: true
            //        }   
            //})

            //const response = await axios.get(LOGIN_URL,
                //{ headers:{ Authorization: 'Basic ' + window.btoa(user + ":" + pwd)
                        //}   
                //}
            //);

            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            //console.log(response);
            
            //const accessToken = response?.data?.accessToken;
            //const roles = response?.data?.roles;
            //setAuth({ user, pwd, roles, accessToken });
            //setUser('');
            //setPwd('');
            //setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }



  return (

    <>
    {success ? (
            <div>
                <Home />
            </div>
    ) : (

    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
    </section>
    )}
    </>
  )
}


export default Login
