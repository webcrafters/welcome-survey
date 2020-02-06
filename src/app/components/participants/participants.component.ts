import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyResult } from '../../model/survey-results.model';
import { SurveyService } from '../../service/survey.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  surveyResult$: Observable<SurveyResult>;
  constructor(private surveySvc: SurveyService) {}

  ngOnInit() {
    this.surveyResult$ = this.surveySvc.getSurveyResults();
  }
}
