import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Tête',
      'Une drôle de tête',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2022/09/13/13/47/animal-7451969_960_720.jpg'
    );
    this.myOtherSnap = new FaceSnap(
      'fleur',
      'une jolie fleur',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2022/03/01/09/35/iceland-poppy-7040946_960_720.jpg'
    );
    this.myLastSnap = new FaceSnap(
      'cat',
      'one cate',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2022/09/06/07/49/cat-7436051_960_720.jpg'
    );
  }
}
