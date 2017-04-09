import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionService } from './question.service';
import { AnswerSelectComponent } from './answer-select.component';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerSelectComponent,
    ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
