import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;

// import React, { Component } from "react";
// import shortid from "shortid";
// import Form from "./components/Form";
// import Contacts from "./components/Contacts";
// export default class App extends Component {
//   state = {
//     contacts: [],
//   };

//   addContacts = ({ name, number }) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     this.setState(({ contacts }) => {
//       const alreadyInContacts = contacts.find(
//         ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
//       );

//       if (alreadyInContacts) {
//         alert("This contact already exists");
//         return { contacts };
//       }
//       return { contacts: [...contacts, newContact] };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.addContacts} />

//         <Contacts contacts={this.state.contacts} />
//       </div>
//     );
//   }
// }
