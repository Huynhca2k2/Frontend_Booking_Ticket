import { handleApiRequest, instance } from "./instance";

const URL_LOGIN = "/auth/token";
const URL_REGISTER = "/api/users";
const URL_LOGOUT = "/auth/logout";

const loginRequest = (username, password) => {
  return {
    username: username,
    password: password,
  };
};

export async function loginUser(username, password) {
  return handleApiRequest(async () => {
    const response = await instance.post(
      `${URL_LOGIN}`,
      loginRequest(username, password)
    );

    if (response?.data?.result?.token) {
      localStorage.setItem("token", response.data.result.token);
    }

    return response;
  });
}

export async function loginAdmin(username, password) {
  return handleApiRequest(async () => {
    return await instance.post(
      `${URL_LOGIN}/admin`,
      loginRequest(username, password)
    );
  });
}

export const registerUser = async (user) => {
  return handleApiRequest(async () => {
    const response = await instance.post(`${URL_REGISTER}`, user);
    return response;
  });
};

export const fetchUserInfo = async () => {
  return handleApiRequest(async () => {
    const response = await instance.get("/api/users/my-info");
    return response.data.result;
  });
};

export const logout = async (token) => {
  try {
    const response = await handleApiRequest(async () => {
      return await instance.post(URL_LOGOUT, { token });
    });
    return response;
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
};
