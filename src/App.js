
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Story from './Pages/Story';
import Need from './Pages/Need';
import Videos from './Pages/Videos';
import Countries from './Pages/Countries';
import Blogs from './Pages/Blogs'
import Login from './auth/Login'
import TermsNConditions from './Pages/TermsNConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Books from './Pages/Books'
function App() {
  return (
    < >
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story/" element={< Story/>} />
          <Route path="/the-need/" element={< Need/>} />
          <Route path="/countries/" element={< Countries/>} />
          <Route path="/videos/" element={< Videos/>} />
          <Route path="/blogs/" element={< Blogs/>} />
          <Route path="/login/" element={<Login />} />
          <Route path="/terms-and-conditions/" element={<TermsNConditions />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/books/" element={<Books />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={< ForgotPassword/>} />
           */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
