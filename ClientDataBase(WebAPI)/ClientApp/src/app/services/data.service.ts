import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  http: HttpClient;
  baseUrl: string;

  constructor(_http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.http = _http;
    this.baseUrl = _baseUrl;
  }

  public GetClientBase(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + "api/Client");
  }

  public FilterClienBase(clients: Client [], name: string):Client [] {
    return clients.filter(client => client.name.includes(name));
  }

}


