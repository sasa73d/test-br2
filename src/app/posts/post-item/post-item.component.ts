import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {CommentsService} from '../comments/comments.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  visibleComment = false;
  visibleAddComment = false;
  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.commentService.addCommentHideForm.subscribe(
      (value: boolean) => {
        this.visibleAddComment = value;
      }
    );
  }

  onAddComment() {
    this.visibleAddComment = !this.visibleAddComment;
    this.visibleComment = false;
  }

  onListComment() {
    this.visibleComment = !this.visibleComment;
    this.visibleAddComment = false;
  }

}
