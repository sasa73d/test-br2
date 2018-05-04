import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

@Injectable()
export class DataAccessService {
  readonly POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  readonly USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments/';
  readonly ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
  readonly PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient,
              private postsService: PostsService,
              private usersService: UsersService,
              private albumsService: AlbumsService,
              private photosService: PhotosService) {}

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

  // access and manage data for comments
  public getCommentsByPostId(postId): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.COMMENT_URL, {
      params: new HttpParams().set('postId', postId)});
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.COMMENT_URL, comment);
  }

  // access and manage data for users
  public getUsers() {
    this.http.get<User[]>(this.USERS_URL)
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
    return this.http.post<User>(this.USERS_URL, user);
  }

  public editUser(user: User) {
    return this.http.put<User>(`${this.USERS_URL}/${user.id}`, user);
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
