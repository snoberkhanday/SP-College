import http from "./HttpService";

const loadAdmissionNotifications = async () => {
  try {
    const response = await http.get(`load-notifications?page=1`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const AdmissionService = {
  loadAdmissionNotifications,
};

export default AdmissionService;
