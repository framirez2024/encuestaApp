import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl: string = 'http://localhost:8000/api/users';

  constructor() { }

  listUsers() {
    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  saveUser(data: any) {
    const options: HttpOptions = {
      url: this.baseUrl,
      data: data,
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.post(options).then((response) => {
      return response.data
    })
  }

  getUser(id: number) {
    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      params: {},
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  updateUser(id: number, data: any) {
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
