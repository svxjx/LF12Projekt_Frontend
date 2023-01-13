import { Component } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { Question } from '../question-model';

@Component({
  selector: 'app-questiondisplay',
  templateUrl: './questiondisplay.component.html',
  styleUrls: ['./questiondisplay.component.css']
})
export class QuestiondisplayComponent {

  constructor(public apiService: APIServiceService) { }

  public question!: Question;
  public result!: string;

  getQuestion(): any {
    this.apiService.getQuestion().subscribe((data: any) => {
      (console.log('data: ' + JSON.stringify(data)));
      this.question = data;
      
    })
  }

  validateAnswer(guess:string){
    var answerIndex = this.question.solution;
    
    console.log('guess: ', guess);
    console.log('answerIndex: ', answerIndex)
    
    if (this.question.answers[answerIndex] == guess){
      console.log('true')
      this.result= 'Correct Answer!';
    } else {
      console.log('false')
      this.result= 'False Answer!';
    }

  }
}
