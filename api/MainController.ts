import { server } from "./axios";

export class MainController {
  async getMenu(): Promise<any> {
    return server.get(`/content/nav`, {
      baseURL: "http://188.227.84.200:3005",
    });
  }
  async getSlider(path: string): Promise<any> {
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
  async getCards(path: string): Promise<any> {
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
}
