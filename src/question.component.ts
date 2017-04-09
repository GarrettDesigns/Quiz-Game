import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
    selector: 'question',
    template: `
        <div>{{question.text}}
            <answer-select (input)="answered = true" (input)="answer.emit($event.target.value)" [answers]="question.options"></answer-select>
            <div *ngIf="answered">
                <p *ngIf="correct">Yay! You got the right answer!</p>
                <p *ngIf="!correct">Bummer! Try Again!</p>
            </div>
        </div>
    `,
    styles: [`
        div {
            margin-bottom: 20px;
        }
    `]
})

export class QuestionComponent {
  @Input() question: Question;
  @Input() correct: boolean;
  @Output() answer = new EventEmitter<string>();
}
