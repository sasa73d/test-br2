import { Injectable } from '@angular/core';
import {DataAccessService} from '../../share/data-access.service';
import {Subject} from 'rxjs/Subject';
import {Comment} from './comment.model';


@Injectable()
export class CommentsService {
  addCommentHideForm = new Subject();
  constructor() { }

}
