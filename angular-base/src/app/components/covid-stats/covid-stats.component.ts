import { AfterViewInit, Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { CovidStatModel } from 'src/app/models/covid-stats.model';
import { CovidStatsService } from 'src/app/services/covid-stats.service';
@Component({
  selector: 'app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.css'],
  providers: [CovidStatsService],
})

@Injectable({ providedIn: 'root' })

export class CovidStatsComponent implements OnInit, OnDestroy, AfterViewInit {
  public Covidstats: CovidStatModel[] = [];

  constructor(private covidService: CovidStatsService) { }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.Covidstats = [];
    this.LoadCovidStats();
  }

  private LoadCovidStats() {
    this.covidService.GetAll().subscribe(
      (res) => {
        console.log('Covid Stats =>', res);
        this.Covidstats = res;
        console.log('Covid Stats =>', this.Covidstats);
      },
      (error) => console.log('ERROR=> ', error)
    );
  }


}
