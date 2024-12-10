import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public baseUrl: string = 'http://localhost:8000/api/roles';

  constructor() { }

  listRoles() {
    const options: HttpOptions = {
      url: this.baseUrl,
      params: {},
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  saveRole(data: any) {
    const options: HttpOptions = {
      url: this.baseUrl,
      data: data,
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.post(options).then((response) => {
      return response.data
    })
  }

  getRole(id: number) {
    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      params: {},
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  updateRole(id: number, data: any) {
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
