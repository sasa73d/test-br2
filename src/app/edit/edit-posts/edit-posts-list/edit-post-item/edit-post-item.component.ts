import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../posts/post.model';

@Component({
  selector: 'app-edit-post-item',
  templateUrl: './edit-post-item.component.html',
  styleUrls: ['./edit-post-item.component.css']
})
export class EditPostItemComponent implements OnInit {
  @Input() post: Post;
  id: number

  constructor() { }

  ngOnInit() {
    this.id = this.post.id;
  }

}
