import { api } from "@/services/apiUrl";

export default {
  async getProfessionals() {
    const response = await api.get("/users/professionals");
    return response.data;
  },
};
