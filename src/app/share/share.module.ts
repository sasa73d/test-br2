import {NgModule} from '@angular/core';
import {SearchPipe} from './search.pipe';
import {EqualValidator} from './equal-validator.directive';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  declarations: [
    SearchPipe,
    EqualValidator,
    DropdownDirective
  ],
  exports: [
    SearchPipe,
    EqualValidator,
    DropdownDirective
  ]
})
export class ShareModule {}
