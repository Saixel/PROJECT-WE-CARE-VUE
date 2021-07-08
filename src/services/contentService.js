import { api } from "@/services/apiUrl";

export default {
  async getPackages() {
    const response = await api.get("/content");
    return response.data;
  },
};
