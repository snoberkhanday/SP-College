import http from "./HttpService";

const loadDepartmentCategories = async () => {
  try {
    const response = await http.get(`load-department-categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const DepartmentService = {
  loadDepartmentCategories,
};

export default DepartmentService;
