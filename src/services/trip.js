import { handleApiRequest, instance } from "./instance";

const URL_TRIP_FILTER = "/api/trips/filter";

const tripFilterRequest = (from, to, date) => {
  return {
    departureLocation: from,
    arrivalLocation: to,
    creationDate: date,
  };
};

export async function filterTrips(from, to, date) {
  return handleApiRequest(async () => {
    const response = await instance.post(
      URL_TRIP_FILTER,
      tripFilterRequest(from, to, date)
    );
    return response.data;
  });
}
