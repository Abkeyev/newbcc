import { server } from "./axios";
import { baseURL } from '../interfaces';
var qs = require('qs');

export class MainController {
  async getMenu(): Promise<any> {
    return server.get(`/content/nav`, {
      baseURL,
    });
  }
  async getFooter(): Promise<any> {
    return server.get(`/content/footer`, {
      baseURL,
    });
  }
  async getUTMLink(code: string): Promise<any> {
    return server.get(`/utm/~${code}`, {
    baseURL,
  });
  }
  async getTarifs(): Promise<any> {
    return server.get(`/content/tabs/tariffs`, {
      baseURL,
    });
  }
  async getSlider(path: string): Promise<any> {
    return server.get(`/content/slider${path}`, {
      baseURL
    });
  }
  async getCalc(path: string): Promise<any> {
    return server.get(`/content/calc${path}`, {
      baseURL
    });
  }
  async getOrder(path: string): Promise<any> {
    return server.get(`/v1/request/data/${path}`, {
      baseURL
    });
  }
  async getCallCenter(): Promise<any> {
    return server.get(`/content/callcenter`, {
      baseURL
    });
  }
  async getBenefits(path: string): Promise<any> {
    return server.get(`/content/benefits${path}`, {
      baseURL
    });
  }
  async getTabs(path: string): Promise<any> {
    return server.get(`/content/tabs${path}`, {
      baseURL
    });
  }
  async getFaq(): Promise<any> {
    return server.get(`/content/faq`, {
      baseURL
    });
  }
  async getCardsFull(path: string): Promise<any> {
    return server.get(`/content/cardfull${path}`, {
      baseURL
    });
  }
  async getCards(path: string): Promise<any> {
    return server.get(`/content/cards${path}`, {
      baseURL
    });
  }
  async getNewsShort(): Promise<any> {
    return server.get(`/content/news/short`, {
      baseURL
    });
  }
  async getNews(page: number): Promise<any> {
    return server.get(`/content/news/${page}`, {
      baseURL
    });
  }
  async getBranches(type: 'atms' | 'branches'): Promise<any> {
    return server.get(`/${type}?client_id=3e7434c4-c80b-4c15-b288-438e10f1545a`, {
      baseURL: "https://api-test.bcc.kz/bcc/production/open-banking/v1.0",
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
  async sendOtp(phone: string): Promise<any> {
    return await server.post(
      `/v1/request/send-sms`,
      {
        phone,
      },
      {
        baseURL
      }
    );
  }

  async sendOrder(request: any): Promise<any> {
    return await server.post(
      `/v1/request/approve`,
      {
        ...request,
      },
      {
        baseURL
      }
    );
  }
}
