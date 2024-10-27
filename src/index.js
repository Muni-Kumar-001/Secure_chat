// import React from "react";
// import reactDOM from "react-dom/client";
// import App from './App';
// const root=reactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);


// // class Car{
// //   constructor(name){
// //       this.brand=name;
// //   }
// //   name(){
// //       return 'your brand name is '+this.brand;
// //   }
// // }
// // class model extends Car{
// //   constructor(name,model){
// //     super(name);
// //     this.model=model;
// //   }
// //   show(){
// //     return this.name()+", mode:: "+this.model;
// //   }
// // }
// // const c=new model("Fortune","2894AD"); 
// // document.write(c.show());
// // root.render(c.show());

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import App from "./App";
import "./index.css"; // Your global styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
