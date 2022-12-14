import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsnavbar',
  templateUrl: './jsnavbar.component.html',
  styleUrls: ['./jsnavbar.component.css'],
})
export class JsnavbarComponent implements OnInit {
  close() {
    let box = document.getElementById('hamburger') as HTMLElement;
    box.classList.toggle('close');
  }

  constructor() {}

  ngOnInit(): void {}
}
