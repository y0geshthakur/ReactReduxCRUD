// // import logo from './logo.svg';
// import './App.css';

// import About from './components/About.js';

// import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
// import Customerlist from './components/Customerlist.js';
// import PostForm from './components/PostForm.js';
// import EditUser from './components/EditUser.js';

// function App() {
//   const Wrapper = (props) => {
//     const params = useParams();
//     return <EditUser {...{...props, match: {params}} } />
//   }
//   return (
//     <div className="App">     
//     <Router>
//       <div className='App'>
//         <nav>
//           <ul>
//             <Link to="/">Home</Link> &nbsp;&nbsp;
//             <Link to="/customers">All Customers</Link> &nbsp;&nbsp;
//             <Link to="/add-customer">Add Customer</Link> &nbsp;&nbsp;           
//             <Link to="/about">About Us</Link> &nbsp;&nbsp;            
//           </ul>
//         </nav>
//         <Routes>
//           <Route exact path="/" element={<About />}></Route>
//           <Route exact path="/customers" element={<Customerlist />}></Route>
//           <Route exact path="/add-customer" element={<PostForm />}></Route>
//           <Route exact path="/edit-customer/:id" element={<Wrapper />}></Route>
//           <Route exact path="/about" element={<About />}></Route>          
//         </Routes>
//       </div>

//     </Router>
      
//     </div>
//   );
// }

// export default App;
import {Provider} from 'react-redux';
import store from './redux/store';


import React from 'react';
import CakeContainer from './redux/CakeContainer';
import IceCreamContainer from './redux/IceCreamContainer';
import ItemContainer from './redux/ItemContainer';
import UserConatiner from './redux/UserConatiner';

function App(){
return(
    <Provider store ={store}>
        <div>
            {/* <CakeContainer/>
            <IceCreamContainer/>
            <ItemContainer cake/>
            <ItemContainer/> */}
            <UserConatiner/>
        </div>
    </Provider>
)
}
export default App;