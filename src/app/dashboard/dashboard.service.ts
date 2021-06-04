import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'http://quotation-system-santander.herokuapp.com/quotation'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
