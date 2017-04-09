import { Component, Input } from '@angular/core';

@Component({
    selector: 'answer-select',
    template: `
        <select>
            <option selected="selected">Please select an answer</option>
            <option *ngFor="let answer of answers" [value]="answer.id">{{answer.text}}</option>
        </select>
    `
})
export class AnswerSelectComponent {
    @Input() answers;
}
