import { server } from "./axios";
var qs = require('qs');

export class MainController {
  async getMenu(): Promise<any> {
    return server.get(`/content/nav`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
   getSlider(path: string): Promise<any> {
    return server.get(`/content/slider${path}`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getCallCenter(): Promise<any> {
    return server.get(`/content/callcenter`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getBenefits(path: string): Promise<any> {
    return server.get(`/content/benefits${path}`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getTabs(path: string): Promise<any> {
    return server.get(`/content/tabs${path}`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getFaq(): Promise<any> {
    return server.get(`/content/faq`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getCardsFull(path: string): Promise<any> {
    return server.get(`/content/cardfull${path}`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  getCards(path: string): Promise<any> {
    return server.get(`/content/cards${path}`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getNewsShort(): Promise<any> {
    return server.get(`/content/news/short`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getNews(page: number): Promise<any> {
    return server.get(`/content/news/${page}`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getBranches(type: 'atms' | 'branches'): Promise<any> {
    return server.get(`/${type}?client_id=3e7434c4-c80b-4c15-b288-438e10f1545a`, {
      baseURL: "https://api.bcc.kz/bcc/production/open-banking/v1.0",
    });
  }
  async getToken(): Promise<any> {
    return server.post(`/auth/token`, qs.stringify({
      grant_type: "client_credentials",
      scope: "bcc.application.public"
    }), {
      baseURL: "https://api.bcc.kz/bcc/production/v1",
      headers: {
        Authorization: "Basic OTZhYmZhMDktYTBhNi00YWVmLWIzYzktNzk4ZDE1MDlmMzJmOlYwY1A0ZUgwZlUwb0s3Z1g3bUs4ZVAzcko0aEIyZVg1aVE2YVI3bkU2cEMxYkY1aEQ0"
      }
    });
  }
  async getCurrency(token: string): Promise<any> {
    return server.get(`/public/rates`, {
        baseURL: "https://api.bcc.kz/bcc/production/v1",
        headers: {
          Authorization: "Bearer " + token
        }
      });
  }
}
