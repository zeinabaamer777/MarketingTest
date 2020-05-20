import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

  sendEmail(data:string){
    this.http.post(this.apiUrl , data).subscribe(next => {
      alert('send successfully');
    }, error => {
      console.log(error);
    })
  }
}
