import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/pages/About";
import PricingPolicy from "./components/pages/PricingPolicy";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import RefundPolicy from "./components/pages/RefundPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import ErrorPage from "./components/pages/ErrorPage";
import LayOut from "./components/LayOut";
import VisaInterviews from "./components/VisaInterviews";
import MentorsPage from "./components/MentorsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="mentorspage" element={<MentorsPage />}></Route>
        <Route path="/pages" element={<LayOut />}>
          <Route path="aboutus" element={<AboutPage />} />
          <Route path="pricingpolicy" element={<PricingPolicy />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="refundpolicy" element={<RefundPolicy />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
          <Route path="visainterviews" element={<VisaInterviews />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
