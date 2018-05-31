import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CommentsService {
  addCommentHideForm = new Subject();
  constructor() { }

}
