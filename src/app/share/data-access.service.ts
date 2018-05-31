import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../posts/post.model';
import {Comment} from '../posts/comments/comment.model';
import {User} from '../users/user-model/user.model';
import 'rxjs/add/operator/map';
import {PostsService} from '../posts/posts.service';
import {UsersService} from '../users/users.service';
import {Album} from '../albums/album.model';
import {AlbumsService} from '../albums/albums.service';
import {Photo} from '../albums/photos-list/photo.model';
import {PhotosService} from '../albums/photos-list/photos.service';
import {AuthService} from '../auth/auth.service';
import {EditPostsService} from '../edit/edit-posts/edit-posts.service';
import {EditService} from '../edit/edit.service';

@Injectable()
export class DataAccessService {
  /*readonly POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments/';
  readonly ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
  readonly PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';*/

  readonly POSTS_URL = 'http://localhost:8080/posts';
  readonly POSTS_EDIT_URL = 'http://localhost:8080/edit-posts';
  readonly USERS_URL = 'http://localhost:8080/users';
  readonly USER_URL = 'http://localhost:8080/user';
  readonly ADD_USERS_URL = 'http://localhost:8080/sign_up';
  readonly COMMENT_URL = 'http://localhost:8080/comments';
  readonly COMMENT_EDIT_URL = 'http://localhost:8080/edit-comments';
  readonly ALBUMS_URL = 'http://localhost:8080/albums';
  readonly PHOTOS_URL = 'http://localhost:8080/photos';

  constructor(private http: HttpClient,
              private postsService: PostsService,
              private usersService: UsersService,
              private albumsService: AlbumsService,
              private photosService: PhotosService,
              private authService: AuthService,
              private editPostsService: EditPostsService,
              private editService: EditService) {}

  // access and manage data for posts
  public getPosts() {
    this.http.get<Post[]>(this.POSTS_URL)
      .subscribe(
        (data: Post[]) => {
          this.postsService.setPosts(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // access and manage data for posts edit
  public getPostsByUserId(userId) {
    this.http.get<Post[]>(this.POSTS_URL, {
      params: new HttpParams().set('userId', userId)})
      .subscribe(
        (data) => {
          this.editPostsService.setPostsByUserId(data);
        },
        (err) => {
          console.log(err.error.message);
        }
      );
  }

  public addPost(post: Post) {
    return this.http.post<Post>( this.POSTS_EDIT_URL, post,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token)});
  }

  public editPost(post: Post) {
    return this.http.put<Post>( `${this.POSTS_EDIT_URL}/${post.id}`, post,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token)});
  }

  public deletePost(post: Post) {
    return this.http.delete<Post>( `${this.POSTS_EDIT_URL}/${post.id}`,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token)});
  }

  // access and manage data for comments
  public getCommentsByPostId(postId): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.COMMENT_URL, {
      params: new HttpParams().set('postId', postId)});
  }

  public addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.COMMENT_URL, comment);
  }

  public deleteComment(commentId) {
    return this.http.delete<Comment>( `${this.COMMENT_EDIT_URL}/${commentId}`,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token)});
  }

  // access and manage from comment edit
  public getCommentsByPostIdEdit(postId) {
    return this.http.get<Comment[]>(this.COMMENT_URL, {
      params: new HttpParams().set('postId', postId)})
      .subscribe(
        (data) => {
          this.editPostsService.setCommentByPostId(data);
        },
        (err) => {
          console.log(err.error.message);
        }
      );
  }

  // access and manage data for users
  public getUsers() {
    this.http.get<User[]>(this.USERS_URL,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token)})
      .subscribe(
        (data) => {
          this.usersService.setUsers(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public addUser(user: User) {
    return this.http.post<User>(this.ADD_USERS_URL , user);
  }

  public editUser(user: User) {
    return this.http.put<User>(`${this.USERS_URL}/${user.id}`, user,
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', 'Bearer ' + this.authService.token)});
  }

  public deleteUser(user: User) {
    return this.http.delete(`${this.USERS_URL}/${user.id}`,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token)});
  }

  // access and manage data for edit_user

  public getUserByUsername(username: string) {
    return this.http.get<User>(this.USER_URL,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token),
      params: new HttpParams().set('username', username)})
      .subscribe(
        (data) => {
          this.editService.setUser(data);
        },
        (err) => {
          console.log(err.error.message);
        }
      );
  }

  // access and manage data for albums
  public getAlbums() {
    this.http.get<Album[]>(this.ALBUMS_URL)
      .subscribe(
        (data) => {
          this.albumsService.setAlbums(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // access and manage data for albums
  getPhotosByAlbumId(albumId) {
    this.http.get<Photo[]>(this.PHOTOS_URL,
      { params: new HttpParams().set('albumId', albumId)})
      .subscribe(
        (data) => {
          this.photosService.setPhotos(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
