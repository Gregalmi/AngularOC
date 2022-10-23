import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Tête',
            description: 'Une drôle de tête',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2022/09/13/13/47/animal-7451969_960_720.jpg',
            location: 'Paris'

        },
        {
            id: 2,
            title: 'fleur',
            description: 'une jolie fleur',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2022/03/01/09/35/iceland-poppy-7040946_960_720.jpg',
            location: 'Montagne'

        },
        {
            id: 3,
            title: 'cat',
            description: 'one cate',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2022/09/06/07/49/cat-7436051_960_720.jpg'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    snapFaceSnapById(faceSnapid: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapid);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap) {
            throw new Error('Facesnap not found');
        } else {
            return faceSnap;
        }
    }
}

