import { openAxiosInstance } from "./axios";

class LoginService {
  async login(email: string, password: string) {
    const response = await openAxiosInstance.post("/auth/login", {
      email,
      password,
    });
    return response.data as any;
  }
}

const loginService = new LoginService();
export { loginService };
