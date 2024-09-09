import { handleApiRequest, instance } from "./instance";

const URL_BUSES = "/api/buses";

export async function getAllBuses() {
  return handleApiRequest(async () => {
    const response = await instance.get(URL_BUSES);
    return response.data;
  });
}
