import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EditPostsService} from '../edit-posts.service';
import {DataAccessService} from '../../../share/data-access.service';
import {Post} from '../../../posts/post.model';
import {User} from '../../../users/user-model/user.model';
import {EditService} from '../../edit.service';

@Component({
  selector: 'app-edit-post-new',
  templateUrl: './edit-post-new.component.html',
  styleUrls: ['./edit-post-new.component.css']
})
export class EditPostNewComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  postEl: Post;
  currentUser: User;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private editPostsService: EditPostsService,
              private dataService: DataAccessService,
              private editService: EditService) { }

  ngOnInit() {
    this.currentUser = this.editService.userEdit;
    this.route.params
      .subscribe(
        (params: Params) => {
          if (params['id']) {
            this.editMode = params['id'] != null;
            this.postEl = this.editPostsService.getPostById(+params['id']);
          }
        }
      );
  }

  onAddPost(form: NgForm) {
    if (this.editMode) {
      this.postEl.title = form.value.title;
      this.postEl.body = form.value.post;
      this.dataService.editPost(this.postEl)
        .subscribe(
          (data) => {
            console.log(data);
            this.editPostsService.editPost(data);
            this.router.navigate(['edit/edit-posts/' + data.id]);
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.postEl = new Post(
        this.currentUser.id,
        form.value.title,
        form.value.post
      );
      this.dataService.addPost(this.postEl)
        .subscribe(
          (data) => {
            this.editPostsService.addPost(data);
            this.router.navigate(['edit/edit-posts']);
          },
          (err) => {
            console.log(err);
          }
        );
    }

  }

  onReset() {}

}
