import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl: string = 'http://localhost:8000/api';
  constructor() { }

  public login(data: any) {
    const options: HttpOptions = {
      url: this.baseUrl + '/suth',
      data: data,
      headers: { 'Content-Type': 'application/json' }
    }

    return CapacitorHttp.post(options).then((response) => {
      return response.data
    })
  }
}
