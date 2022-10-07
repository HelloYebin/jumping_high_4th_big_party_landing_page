import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import RouteSummary from "./routes/routeSummary";
import RouteApply from "./routes/routeApply";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path="/intro/summary" element={<RouteSummary />} />
          <Route path="/apply" element={<RouteApply />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
