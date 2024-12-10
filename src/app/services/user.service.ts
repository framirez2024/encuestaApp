import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl: string = 'http://localhost:8000/api/users';

  constructor() { }

  async getToken() {
    const token = await Preferences.get({ key: 'token' });

    return token;
  }

  async listUsers() {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  async saveUser(data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.post(options).then((response) => {
      return response.data
    })
  }

  async getUser(id: number) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      params: {},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  async updateUser(id: number, data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      params: {},
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.put(options).then((response) => {
      return response.data
    })
  }
}
