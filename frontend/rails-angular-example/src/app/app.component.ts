import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todos$;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.todos$ = this.http.get('http://localhost:3000/todos');
    this.todos$ = this.http.get('http://35.200.32.25/todos');
  }
}
