import React, { useEffect, useState } from "react";
import "./Iqac.css";
import axios from "axios";
import { Tab, Tabs } from "react-bootstrap";
import IqacDownloads from "./IqacDownloads/IqacDownloads";
import LineBottom from "../../utils/LineBottom";

const Iqac = () => {
  const [iqacs, setIqacs] = useState([]);

  useEffect(() => {
    const fetchIqacs = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setIqacs(response.data);
    };

    fetchIqacs();
  }, []);

  return (
    <div className="container my-5">
      <LineBottom span="IQAC" text="Section" />
      <Tabs className="iqacPage-tabs">
        <Tab className="iqacPage-tabItem" eventKey={1} title="Meetings">
          <IqacDownloads Iqacs={iqacs.slice(1, 11)} />
        </Tab>
        <Tab className="iqacPage-tabItem" eventKey={2} title="Facilities">
          <IqacDownloads Iqacs={iqacs.slice(11, 21)} />
        </Tab>
        <Tab className="iqacPage-tabItem" eventKey={3} title="AQAR">
          <IqacDownloads Iqacs={iqacs.slice(21, 31)} />
        </Tab>
        <Tab className="iqacPage-tabItem" eventKey={4} title="Practices">
          <IqacDownloads Iqacs={iqacs.slice(1, 11)} />
        </Tab>
        <Tab className="iqacPage-tabItem" eventKey={5} title="Calender">
          <IqacDownloads Iqacs={iqacs.slice(11, 21)} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Iqac;
