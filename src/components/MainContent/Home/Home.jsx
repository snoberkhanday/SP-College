import { useState } from "react";
import { useEffect } from "react";
import HomeService from "../../../services/HomeService";
import LinksStudentSay from "./LinksStudentSay/NewsStudentSay";
import MessageSection from "./MessageSection/MessageSection";
import NotifyNewsSection from "./NotifyNewsSection/NotifyNewsSection";
import WiserCarousal from "./WiserCarousal/WiserCarousal";
const Home = () => {
  const [allData, setAllData] = useState({});
  const [allDataLoader, setAllDataLoader] = useState(false);
  const [notificationsLoader, setNotificationsLoader] = useState(false);
  const [topNotifications, setTopNotifications] = useState({});
  const [error, setError] = useState(null);

  const loadData = () => {
    HomeService.AllData()
      .then((response) => {
        setAllData(response);
        setAllDataLoader(true);
      })
      .catch((error) => {
        setAllDataLoader(true);
        setError("Failed to load data");
      });
  };

  const loadTopNotifications = () => {
    HomeService.TopNotifications()
      .then((response) => {
        setTopNotifications(response);
        setNotificationsLoader(true);
      })
      .catch((error) => {
        setNotificationsLoader(true);
        setError("Failed to load data");
      });
  };

  useEffect(() => {
    loadData();
    loadTopNotifications();
  }, []);
  return (
    <>
      <WiserCarousal
        loader={allDataLoader}
        data={allDataLoader ? allData.slider : []}
        error={error}
      />
      <MessageSection data={allDataLoader ? allData.school : null} loader={allDataLoader} error={error} />
      <NotifyNewsSection
        loader={allDataLoader}
        error={error}
        data={allData}
        notificationsLoader={notificationsLoader}
      />
      <LinksStudentSay loader={allDataLoader} error={error} events={allDataLoader ? allData.events : []} />
    </>
  );
};

export default Home;
