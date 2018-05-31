import {Component, OnChanges, OnInit, QueryList, SimpleChange, ViewChildren} from '@angular/core';
import {Post} from '../../../posts/post.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EditPostsService} from '../edit-posts.service';
import {DataAccessService} from '../../../share/data-access.service';
import {Comment} from '../../../posts/comments/comment.model';
import {EditCommentComponent} from './edit-comment/edit-comment.component';

@Component({
  selector: 'app-edit-post-view',
  templateUrl: './edit-post-view.component.html',
  styleUrls: ['./edit-post-view.component.css']
})
export class EditPostViewComponent implements OnInit {
  @ViewChildren('comments') comments: QueryList<EditCommentComponent>;
  post: Post;
  id: number;
  term_comments: string;
  visibleComments = false;
  checkSelectAll = false;
  commentsByPostId: Comment[];
  n = 1;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private editPostsService: EditPostsService,
              private dataService: DataAccessService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.post = this.editPostsService.getPostById(this.id);
          this.dataService.getCommentsByPostIdEdit(this.id);
          this.editPostsService.commentByPostIdChange
            .subscribe(
              (data: Comment[]) => {
                this.commentsByPostId = data;
              }
            );
        }
      );
  }

  onDelete() {
    if (confirm('Do you want to delete the post - ' + this.post.title + '?')) {
      this.dataService.deletePost(this.post)
        .subscribe(
          (data) => {
            console.log(data);
            this.editPostsService.deletePost(this.post.id);
            this.router.navigate( ['edit/edit-posts']);
          },
          (err) => {
            console.log(err.error.message);
          }
        );
    }
  }

  onEdit() {
    this.router.navigate(['edit/edit-posts/' + this.post.id + '/edit'])
  }

  visibleComment() {
    this.visibleComments = !this.visibleComments;
    console.log(this.comments.toArray()[1]);
  }

  selectAll() {
    this.checkSelectAll = !this.checkSelectAll;
    console.log('TEST' + this.checkSelectAll);
    if (this.checkSelectAll) {
      for (let i = 0; i < this.comments.toArray().length; i++) {
        this.comments.toArray()[i].checkedItem = true;
      }
    } else {
      for (let i = 0; i < this.comments.toArray().length; i++) {
        this.comments.toArray()[i].checkedItem = false;
      }
    }
  }

  onDeleteComments() {
    if (confirm('Do you want to delete selected comments ?')) {
      for (let i = 0; i < this.comments.toArray().length; i++) {
        if (this.comments.toArray()[i].checkedItem) {
          this.dataService.deleteComment(this.comments.toArray()[i].comment.id)
            .subscribe(
              (data) => {
                console.log(data);
                this.editPostsService.deleteComment(this.comments.toArray()[i].comment.id);
              },
              (err) => {
                console.log(err.error.message);
              }
            );
        }
      }
    }
  }

}
