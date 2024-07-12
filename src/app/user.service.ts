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

  addNewUserToList(user: User) {

    this.createUserApi(user).subscribe(
      (response) => {
        this.usersListService.push(response);
      },
      (error) => {
        console.error('Error creating user', error);
      }
    );
  }

  private createUserApi(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUserToList(updatedUser: User) {

    this.updateUserApi(updatedUser).subscribe(
      (response) => {
        const index = this.usersListService.findIndex((u) => u.id === response.id);
        if (index !== -1) {
          this.usersListService[index] = response;
        }
      },
      (error) => {
        console.error('Error updating user', error);
      }
    );

  }

  private updateUserApi(user: User): Observable<User> {
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
