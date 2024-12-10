import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public baseUrl: string = 'http://localhost:8000/api/profiles';

  constructor() { }

  listProfiles() {
    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  saveProfile(data: any) {
    const options: HttpOptions = {
      url: this.baseUrl,
      data: data,
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.post(options).then((response) => {
      return response.data
    })
  }

  getProfile(id: number) {
    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      params: {},
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  updateProfile(id: number, data: any) {
    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      data: data,
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.put(options).then((response) => {
      return response.data
    })
  }
}
