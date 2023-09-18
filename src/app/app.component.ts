import { Component, OnInit } from '@angular/core';
import { AppState, Task } from './types';
import { animations } from 'src/animations';
import { TASKS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animations]
})
export class AppComponent implements OnInit{
  state : AppState = 'start';
  i: number;
  maxQ: number;
  task: Task;
  answer = '';
  isError = false;
  victory = false;

  ngOnInit(): void {
    const n = localStorage.getItem('n');
    if (n === 'complete') {
      this.congratulate();
    }
    else if (n)
      this.initTasks(+n);
  }

  startQuest() {
    this.state = 'start-next';
  }

  initTasks(n: number) {
    this.i = n;
    this.task = TASKS[n];
    this.maxQ = TASKS.length;
    this.state = 'current';
  }

  checkAnswer() {
    if (this.task.solution.some(v => v.toLowerCase() === this.answer.toLowerCase())) {
        this.state = 'next';
    }
    else
        this.isError = true;
    }

    setNextTask() {
      this.i++;
      this.task = TASKS[this.i];
      this.isError = false;
      this.answer = '';
      this.state = 'current';
      localStorage.setItem('n', this.i.toString());
    }

  clearError() {
    this.isError = false;
  }

  congratulate() {
    this.state = 'end';
  }

  giveReward() {
    this.state = 'reward';
  }

  onAnimationEnd() {
    switch(this.state) {
      case 'start-next':
        this.initTasks(0);
        localStorage.setItem('n', '0');
        break;
      case 'next':
        if (this.i < this.maxQ - 1)
          this.setNextTask();
        else {
          this.congratulate();
          localStorage.setItem('n', 'complete');
        }
        break;
      case 'end':
        this.giveReward();
    }
  }
}
