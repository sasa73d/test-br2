import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommentsService} from '../comments.service';
import {Comment} from '../comment.model';
import {DataAccessService} from '../../../share/data-access.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() postId: number;
  @ViewChild('f') slForm: NgForm;
  constructor(private dataService: DataAccessService, private commentService: CommentsService) { }

  ngOnInit() {
  }

  onAddComment(form: NgForm) {
    const value = form.value;
    console.log(
      this.dataService.addComment(
        new Comment(this.postId, value.title, value.email, value.comment)
      )
    );
    form.onReset();
    this.commentService.addCommentHideForm.next(false);
  }

}
