import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import FtoS from './FtoS';
// import StoF from './StoF';
// import Context from './Context';
// import MountLive from './MountLive';
// import UpdateLive from './UpdateLive';
import Router from './routers'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <App></App>
  <p>------f to s------</p>
  <FtoS></FtoS>
  <p>------s to f------</p>
  <StoF></StoF> */}
  {/* <Context></Context>
  <p>----------挂载-----</p>
  <MountLive></MountLive>
  <p>----------挂载-----</p>
  <UpdateLive></UpdateLive> */}
  <Router></Router>
  </>
);
