import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Tête',
        description: 'Une drôle de tête',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2022/09/13/13/47/animal-7451969_960_720.jpg',
        location: 'Paris'
  
      },
      {
        title: 'fleur',
        description: 'une jolie fleur',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2022/03/01/09/35/iceland-poppy-7040946_960_720.jpg',
        location: 'Montagne'
  
      },
      {
        title: 'cat',
        description: 'one cate',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2022/09/06/07/49/cat-7436051_960_720.jpg'
      }
    ]
  }
}
