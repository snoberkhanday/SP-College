import { Routes, Route } from "react-router-dom";
import CCollegeService from "../MainContent/CCollegeService/CCollegeService";
import About from "../MainContent/About/About";
import Department from "../MainContent/Department/Department";
import Home from "../MainContent/Home/Home";
import Iqac from "../MainContent/Iqac/Iqac";
import Nirf from "../MainContent/Nirf/Nirf";
import Gallery from "../MainContent/Gallery/Gallery";
import GalleryContent from "../MainContent/Gallery/GalleryContent";
import Admission from "../MainContent/Admission/Admission";
import "../MainContent/Admission/Admission.css";

const WiserRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/service/:slug" element={<CCollegeService />} />
      <Route exact path="/college-departments" element={<Department />} />
      <Route exact path="/iqac-downloads" element={<Iqac />} />
      <Route exact path="/nirf" element={<Nirf />} />
      <Route exact path="/gallary" element={<Gallery />} />
      <Route exact path="/gallery/item/:slug" element={<GalleryContent />} />
      <Route exact path="/admission" element={<Admission />} />
    </Routes>
  );
};

export default WiserRouter;
