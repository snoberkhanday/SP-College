import http from "./HttpService";

const AllData = async () => {
  try {
    const response = await http.get("all-data");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const TopNotifications = async () => {
  try {
    const response = await http.get("top-notifications");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const HomeService = {
  AllData,
  TopNotifications,
};

export default HomeService;
