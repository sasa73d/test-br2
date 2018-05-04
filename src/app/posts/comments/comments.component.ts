import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CommentsService} from './comments.service';
import {Comment} from './comment.model';
import {DataAccessService} from '../../share/data-access.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postId: number;
  comments: Observable<Array<Comment>>;
  constructor(public dataService: DataAccessService) { }

  ngOnInit() {
    this.comments = this.dataService.getCommentsByPostId(this.postId);
  }

}
