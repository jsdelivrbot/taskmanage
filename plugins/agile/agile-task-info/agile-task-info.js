import {Component, ViewEncapsulation, Inject} from 'angular2/core';
import template from './agile-task-info.html!text';
import Task from '../../../lib/task-list/task/task.js';

@Component({
  selector: 'ngc-agile-task-info',
  encapsulation: ViewEncapsulation.None,
  template,
  host: {
    'class': 'task-infos__info'
  }
})
export default class AgileTaskInfo {
  // Since this component is always inserted into plugin slots that are part of the Task component, it's safe to inject it at this point
  constructor(@Inject(Task) taskComponent) {
    this.task = taskComponent.task;
  }
}
