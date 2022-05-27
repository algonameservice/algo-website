import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/styles/styles.css';

import Profile from './views/Profile';
import Home from './views/Home';
import {getInformation} from './assets/js/Algoservice';

function App() {
  const [domain, setDomain] = React.useState('');
  const [domainInfo, setDomainInfo] = React.useState({});

  React.useEffect(() => {
    async function getInfo(){
      let userDomain = window.location.host.split('.');
      if(userDomain.length === 3) {
        userDomain = userDomain[0];
        setDomain(userDomain);
        const info = await getInformation(userDomain+'.algo');
        if(info) {
          setDomainInfo(info);
        }
      }
    }
    getInfo();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {domain ? 
        <Profile info={domainInfo} domain={domain} /> : <Home /> }
      </header>
    </div>
  );
}

export default App;
