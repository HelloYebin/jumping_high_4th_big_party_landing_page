import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import RouteApply from "./routes/apply/routeApply";
import RouteSummary from "./routes/intro/routeSummary";
import RouteHistory from "./routes/intro/routeHistory";
import RouteInvite from "./routes/intro/routeInvite";
import RouteSchedule from "./routes/information/routeSchedule";
import RoutePrepare from "./routes/information/routePrepare";
import RouteLocation from "./routes/information/routeLocation";
import RouteStorage from "./routes/information/routeStorage";
import RouteNotice from "./routes/news/routeNotice";
import RoutePress from "./routes/news/routePress";
import RouteJumping from "./routes/news/routeJumping";
import RoutePressDetail from "./routes/news/routePressDetail";
import ScrollTop from "./components/scrollTop";
import RouteReservation from "./routes/apply/routeReservation";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollTop />
        <div className={styles.appContents}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro/summary" element={<RouteSummary />} />
            <Route path="/intro/history" element={<RouteHistory />} />
            <Route path="/intro/invite" element={<RouteInvite />} />
            <Route path="/info/schedule" element={<RouteSchedule />} />
            <Route path="/info/prepare" element={<RoutePrepare />} />
            <Route path="/info/location" element={<RouteLocation />} />
            <Route path="/info/booth" element={<RouteStorage />} />
            <Route path="/news/notice" element={<RouteNotice />} />
            <Route path="/news/press" element={<RoutePress />} />
            <Route path="/news/press/:id" element={<RoutePressDetail />} />
            <Route path="/news/jumping" element={<RouteJumping />} />
            <Route path="/apply" element={<RouteApply />} />
            <Route path="/apply/reservation" element={<RouteReservation />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
