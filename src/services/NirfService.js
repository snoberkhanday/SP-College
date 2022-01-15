import http from "./HttpService";

const loadNirfDownloads = async () => {
  try {
    const response = await http.get(`load-nirf-downloads?page=1`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const NirfService = {
  loadNirfDownloads,
};

export default NirfService;
