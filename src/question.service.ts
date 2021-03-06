export class QuestionService {
    getQuestions() {
        return questions;
    }
    checkAnswers(answers: Map<string, string>) {
      // define correctAnswers as a new set
      const correctAnswers = new Set<string>();
      for(const question of questions) {
        if(answers.get(question.id) === question.solution) {
          correctAnswers.add(question.id);
        }
      }
      return correctAnswers;
    }
}

const questions = [
  {
    "id": "q1",
    "text": "Property binding with [value]=\"foo\" or interpolation with {{foo}} results in",
    "options": [
      {
        "id": "q1.a1",
        "text": "One-way binding from the component to the view"
      },
      {
        "id": "q1.a2",
        "text": "One-way binding from the view to the component"
      },
      {
        "id": "q1.a3",
        "text": "Two-way binding"
      }
    ],
    "solution": "q1.a1"
  },
  {
    "id": "q2",
    "text": "Event binding with (click)=\"doSomething()\" results in",
    "options": [
      {
        "id": "q2.a1",
        "text": "One-way binding from the component to the view"
      },
      {
        "id": "q2.a2",
        "text": "One-way binding from the view to the component"
      },
      {
        "id": "q2.a3",
        "text": "Two-way binding"
      }
    ],
    "solution": "q2.a2"
  },
  {
    "id": "q3",
    "text": "Using ngModel with [(ngModel)]=\"foo\" results in",
    "options": [
      {
        "id": "q3.a1",
        "text": "One-way binding from the component to the view"
      },
      {
        "id": "q3.a2",
        "text": "One-way binding from the view to the component"
      },
      {
        "id": "q3.a3",
        "text": "Two-way binding"
      }
    ],
    "solution": "q3.a3"
  },
  {
    "id": "q4",
    "text": "ngFor is an example of",
    "options": [
      {
        "id": "q4.a1",
        "text": "Attribute directive"
      },
      {
        "id": "q4.a2",
        "text": "Structural directive"
      },
      {
        "id": "q4.a3",
        "text": "Destructuring assignment"
      }
    ],
    "solution": "q4.a2"
  },
  {
    "id": "q5",
    "text": "ngClass is an example of",
    "options": [
      {
        "id": "q5.a1",
        "text": "Attribute directive"
      },
      {
        "id": "q5.a2",
        "text": "Structural directive"
      },
      {
        "id": "q5.a3",
        "text": "Destructuring assignment"
      }
    ],
    "solution": "q5.a1"
  }
]
