import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  usersList: User[] = [
  ];

  subject = new BehaviorSubject(this.usersList);

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<{ data: User[] }>(this.apiUrl)
      .pipe(
        map((response) => {
          this.usersList = response.data;
          console.log('dupa ' + this.usersList);
          return response.data;
        }),
        catchError((error) => {
          console.error('Error fetching users', error);
          return of([]);
        })
      );
  }

  private deleteUserAPI(id: number): Observable<any> {

    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUserFromList(user: User) {
    if (user) {
      this.deleteUserAPI(user.id).subscribe({
        next: () => {
          this.usersList = this.usersList.filter(
            (u) => u.id !== user.id
          );
          this.subject.next(this.usersList);

          console.log('delete ' + this.usersList);
        },
        error: (err) => {
          console.error('Error deleting user', err);
        },
      });
    }
  }
}
