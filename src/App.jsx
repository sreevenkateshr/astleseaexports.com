import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Products from "./pages/Products";
import Process from "./pages/Process";
import Aboutus from "./pages/Aboutus";
import Galleries from "./pages/Galleries"
import Blogs from "./pages/Blogs";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* Catch all undefined routes */}
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
