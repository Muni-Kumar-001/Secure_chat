// import React from "react";
// import { Route, Switch } from 'react-router-dom';
// // import UserAuthentiPage from "./compornents/BlockChain/UserAuthentiPage";
// // import Parent from "./compornents/props/Parent";
// // import Arrays from "./compornents/Arrays";
// import Header from "./compornents/Header";
// import Login from "./compornents/signin/Login";
// import Register from "./compornents/signin/Register";

// function App(){
//   return(
//     <>
//       {/* <p>hi Welcome</p> */}
//       {/* <Parent/> */}
//       {/* <Arrays/> */}
//       {/* <Header/> */}
//       {/* <Login/> */}
//       {/* <Register/> */}
//       {/* <UserAuthentiPage/> */}
//       <Switch>
//         <Route path="/" exact component={Login} />
//         <Route path="/register" component={Register} />
//       </Switch>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./compornents/signin/Login";
import Register from "./compornents/signin/Register";
import Head from "./compornents/chats_pages/Head";
import MessagePlace from "./compornents/chats_pages/MessagePlace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/chat" element={<Head/>}/>
        <Route path="/messagePlace" element={<MessagePlace/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import RecordUpload from './components/RecordUpload';
// import Login from './components/Login';
// import Register from './components/Register';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" exact component={Dashboard} />
//         <Route path="/upload" component={RecordUpload} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//       </Switch>
//     </div>
//   );
// };

// export default App;