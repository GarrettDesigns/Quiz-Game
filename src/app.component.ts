import { Component } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'quiz-show',
  template: `
    <question [question]="question" [correct]="isCorrect(question.id)" (answer)="onAnswer(question.id, $event)" *ngFor="let question of questions"></question>
  `,
  styles: [`
  `]
})
export class AppComponent {

  questions: Question[];
  private answers = new Map<string, string>();
  correctAnswers: Set<string>;
  constructor(private questionService: QuestionService) {
    this.questions = questionService.getQuestions();
  }

  onAnswer(questionId, answer) {
      this.answers.set(questionId, answer);
      this.correctAnswers = this.questionService.checkAnswers(this.answers);
  }
  isCorrect(questionId)  {
    if(this.correctAnswers) {
        return this.correctAnswers.has(questionId);
    }
  }
}
