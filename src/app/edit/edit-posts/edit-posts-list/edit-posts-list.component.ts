import { Component, OnInit } from '@angular/core';
import {Post} from '../../../posts/post.model';
import {DataAccessService} from '../../../share/data-access.service';
import {EditPostsService} from '../edit-posts.service';
import {EditService} from '../../edit.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-posts-list',
  templateUrl: './edit-posts-list.component.html',
  styleUrls: ['./edit-posts-list.component.css']
})
export class EditPostsListComponent implements OnInit {
  postsByUserId: Post[];
  term: string;
  userId: number;
  p = 1;
  constructor(private dataService: DataAccessService,
              private editPostsService: EditPostsService,
              private editService: EditService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.editService.userEdit.id;
    this.dataService.getPostsByUserId(this.userId);
    this.editPostsService.postsByUserIdChange
      .subscribe(
        (data: Post[]) => {
          this.postsByUserId = data;
        }
      );
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
