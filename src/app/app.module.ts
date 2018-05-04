import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {PostsModule} from './posts/posts.module';
import {AlbumsModule} from './albums/albums.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    PostsModule,
    AlbumsModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
