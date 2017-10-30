import {Component, Input, Output, ViewEncapsulation, EventEmitter} from 'angular2/core';
import Editor from '../../ui/editor/editor.js';
import template from './comment.html!text';
// We use our fromNow pipe that converts timestamps to relative times
import FromNowPipe from '../../pipes/from-now.js';

@Component({
  selector: 'ngc-comment',
  host: {
    'class': 'comment'
  },
  template,
  encapsulation: ViewEncapsulation.None,
  directives: [Editor],
  pipes: [FromNowPipe]
})
export default class Comment {
  // The time of the comment as a timestamp
  @Input() time;
  // The user object of the user who created the comment
  @Input() user;
  // The comment content
  @Input() content;
  // If a comment was edited this event will be emitted
  @Output() commentEdited = new EventEmitter();

  onEditSaved(content) {
    this.commentEdited.next(content);
  }
}
