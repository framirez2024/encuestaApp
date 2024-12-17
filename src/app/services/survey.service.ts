import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public baseUrl: string = 'http://localhost:8000/api/survey';

  constructor() { }

  async getToken() {
    const token = await Preferences.get({ key: 'token' });

    return token;
  }

  async listSurveys() {
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

  async saveSurvey(data: any) {
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

  async getSurvey(id: number) {
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

  async updateSurvey(id: number, data: any) {
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

  async deleteSurvey(id: number) {
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

  async addQuestion(surveyId: number, data: any) {
    let { value } = await this.getToken();

    const options: HttpOptions = {
      url: `${this.baseUrl}/${surveyId}/addQuestion`,
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
