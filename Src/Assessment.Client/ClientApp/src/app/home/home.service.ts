import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Board } from '../models/board';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

    constructor(private http : HttpClient) {

    }

    getAll() : Observable<Board[]> {
        return this.http.get<Board[]>('assets/Boards.json');
            
    }

    addBoard(board: Board) : Observable<any> {
       return this.http.post('/boards',
        JSON.stringify(board));
    }

    deleteBoard(id : number) : Observable<any> {
        return this.http.delete('/boards/'+ id);
    }

    getAllFromBoard(id: number) : Observable<any> {
        return this.http.get('/boards/'+id + '/post-its');
    }

    deleteBoardPostIdById(boardId: number, postItId: number) : Observable<any> {
        return this.http.delete("/boards/" + boardId + "/post-its/" + postItId);
    }


}