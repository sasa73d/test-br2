import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../posts/comments/comment.model';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() comment: Comment;
  checkedItem = false;
  visibleBody = false;

  constructor() { }

  ngOnInit() {
  }

  onVisible() {
    this.visibleBody = !this.visibleBody;
  }

}
