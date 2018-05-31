import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {PostsModule} from './posts/posts.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {AlbumsModule} from './albums/albums.module';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {EditModule} from './edit/edit.module';
import {UsersModule} from './users/users.module';
import { BlankAuthComponent } from './blank-auth/blank-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    EditComponent,
    BlankAuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PostsModule,
    AlbumsModule,
    UsersModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
    NgxPaginationModule,
    EditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
