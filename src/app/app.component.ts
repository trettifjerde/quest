import { Component } from '@angular/core';
import { AppState, Task } from './types';
import { animations } from 'src/animations';
import { TASKS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animations]
})
export class AppComponent {
  state : AppState = 'start';
  i: number;
  maxQ: number;
  task: Task;
  answer = '';
  isError = false;
  victory = false;

  startQuest() {
    this.state = 'start-next';
  }

  initTasks() {
    this.i = 0;
    this.task = TASKS[0];
    this.maxQ = TASKS.length;
    this.state = 'current';
  }

  checkAnswer() {
    if (this.answer.trim().toLowerCase() === this.task.solution.toLowerCase()) {
        this.setNextTask();
    }
    else
        this.isError = true;
    }

  setNextTask() {    
  this.state = 'next';
    if (this.i + 1 < this.maxQ) {
      this.i++;
      this.task = TASKS[this.i];
      this.isError = false;
      this.answer = '';
    }
    else {
      this.victory = true;
    }
  }

  startNextTask() {
    this.state = 'current';
  }

  clearError() {
    this.isError = false;
  }

  congratulate() {
    this.state = 'end';
  }

  onAnimationEnd() {
    switch(this.state) {
      case 'start-next':
        this.initTasks();
        break;
      case 'next':
        if (this.victory)
          this.congratulate();
        else
          this.startNextTask();
          break;
    }
  }
}
