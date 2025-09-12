import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CounterApp from "./components/CounterApp";
import CounterRedux from "./components/CounterRedux";
import TimerApp from "./components/TimerApp";

// ✅ Correct lazy imports
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading Navbar...</h2>}>
        <Navbar />
      </Suspense>

      {/* Optional normal components */}
      {/* <CounterApp/> */}
      {/* <CounterRedux/> */}
      {/* <TimerApp/> */}

      <Suspense fallback={<h1>Loading page...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
