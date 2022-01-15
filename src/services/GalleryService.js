import http from "./HttpService";

const loadGallery = async () => {
  try {
    var response = await http.get("load-gc");
    return response.data;
  } catch(error) {
    throw error;
  }
}

const loadGalleryItemContent = async (slug) => {
  try {
    var response = await (http.get(`load-gg/${slug}`))
    return response.data;
  } catch(error) {
    throw error;
  }
}

const GalleryService = {
  loadGallery,
  loadGalleryItemContent
}

export default GalleryService;