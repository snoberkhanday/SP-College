import http from "./HttpService";
const loadServiceItem = async (slug) => {
  try {
    const response = await http.get(`LoadServiceItem/${slug}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const allServices = async () => {
  try {
    const response = await http.get("services");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const CollegeService = {
  loadServiceItem,
  allServices,
};

export default CollegeService;
