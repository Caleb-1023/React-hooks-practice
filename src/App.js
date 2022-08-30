import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import JumbotronComponent from './components/JumbotronComponent';
import UserForm from './components/UserForm';
import GitHub from './components/GitHub';

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
  // return `{user.firstName}`
}

function App() {
  const user = {
    firstName: "Caleb",
    lastName: "Lex"
  }

  return (
    <div className='container'>
      <GitHub />
    </div>
  );
}

export default App;



{/* <JumbotronComponent>
  This is a long sentence and I want to pass props from the outside
</JumbotronComponent> */}
{/* <UserForm /> */}
{/* <Products /> */}