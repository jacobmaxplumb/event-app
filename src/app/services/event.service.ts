import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiKey: string = '';
  private url: string = '';
  private events: EventObject[];
  private favoriteEvents: EventObject[];

  constructor(private http: HttpClient) { }

  getEvents(eventFilter: EventFilter): Observable<EventResponse> {
    let parameters = {
      api_key: this.apiKey,
      city: eventFilter.city ? eventFilter.city : ''
    };
    return this.http.get<EventResponse>(`${this.url}`, {params: parameters});
  }
}
