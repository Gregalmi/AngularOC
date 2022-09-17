import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnap!: boolean;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Tête';
    this.description = 'Une drôle de tête';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2022/09/13/13/47/animal-7451969_960_720.jpg';
    this.isSnap = false;
    this.buttonText = "Oh snap!";

  }

  onSnap() {
    if(this.isSnap == false) {
      this.snaps++;
      this.isSnap = true;
      this.buttonText = "Ooops snaps";
    } else {
      this.snaps--;
      this.isSnap = false;
      this.buttonText = "Oh snap!";
    }    
  }
}
