import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  public baseUrl: string = 'http://localhost:8000/api/applicationSurveys';
  public baseUrlApplySurvey: string = 'http://localhost:8000/api/applaySurvey';


  constructor() { }

  async getToken() {
    const token = await Preferences.get({ key: 'token' });

    return token;
  }

  async listApplications() {
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

  async saveApplication(data: any) {
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

  async getApplication(id: number) {
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

  async updateApplication(id: number, data: any) {
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

  async deleteApplication(id: number) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrl + '/' + id,
      params: {},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.delete(options).then((response) => {
      return response.data
    })
  }

  async addQuestion(ApplicationId: number, data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: `${this.baseUrl}/${ApplicationId}/addQuestion`,
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

  async getSurveyToApplay(id: number) {
    // let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrlApplySurvey + '/' + id,
      params: {},
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + value
      }
    }

    return CapacitorHttp.get(options).then((response) => {
      return response.data
    })
  }

  async saveSurveyApplication(applicationId: number, data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: this.baseUrlApplySurvey + '/' + applicationId,
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
}
