import { openAxiosInstance } from "./axios";

class LoginService {
  async login(username: string, password: string) {
    const response = await openAxiosInstance.post("/auth/login", {
      username,
      password,
    });
    return response.data as any;
  }
}

const loginService = new LoginService();
export { loginService };
