import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public baseUrl: string = 'http://localhost:8000/api/profiles';

  constructor() { }

  async getToken() {
    const token = await Preferences.get({ key: 'token' });

    return token;
  }

  async listProfiles() {

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

  async saveProfile(data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.post(options).then((response) => {
      return response.data
    })
  }

  async getProfile(id: number) {
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

  async updateProfile(id: number, data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
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
