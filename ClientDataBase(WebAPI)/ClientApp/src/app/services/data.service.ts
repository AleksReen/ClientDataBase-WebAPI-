import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  newClient: BehaviorSubject<any> = new BehaviorSubject(1); 

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  public GetClientBase(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + "api/Client");
  }

  public FilterClienBase(clients: Client [], name: string):Client [] {
    return clients.filter(client => client.name.includes(name));
  }

  public SaveClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl + "api/Client", client);
  }

}


