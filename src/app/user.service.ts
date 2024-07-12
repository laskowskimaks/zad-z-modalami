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

  usersListService: User[] = [];

  constructor(private http: HttpClient) {

    this.initUsers();
  }

  private initUsers() {
    this.fetchUsersFromApi().subscribe((users) => {
      this.usersListService = users;
    })
  }

  fetchUsersFromApi(): Observable<User[]> {
    return this.http.get<{ data: User[] }>(this.apiUrl)
      .pipe(
        map((response) => {
          return response.data;
        }),
        catchError((error) => {
          console.error('Error fetching users', error);
          return of([]);
        })
      );
  }

  getUsersListFromService() {
    return this.usersListService;
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  private deleteUserAPI(id: number): Observable<any> {

    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  deleteUserFromList(user: User) {
    if (user) {
      this.deleteUserAPI(user.id).subscribe({
        next: () => {
          this.usersListService = this.usersListService.filter(
            (u) => u.id !== user.id
          );
          console.log('delete ' + this.usersListService);
        },
        error: (err) => {
          console.error('Error deleting user', err);
        },
      });
    }
  }
}
