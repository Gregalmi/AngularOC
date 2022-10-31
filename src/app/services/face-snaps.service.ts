import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchAll, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {

    constructor(private http: HttpClient) {

    }
    
    
    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    snapFaceSnapById(faceSnapid: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapid).pipe(
            map(faceSnap =>({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>
                (`http://localhost:3000/facesnaps/${faceSnapid}`, 
                updatedFaceSnap))
        );
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
       return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
       return this.getAllFaceSnaps().pipe(
        map(facesnaps => [...facesnaps].sort((a:FaceSnap,b:FaceSnap) => a.id - b.id)),
        map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length -1]),
        map(previousFacesnap => ({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap))

       )
    }
}

