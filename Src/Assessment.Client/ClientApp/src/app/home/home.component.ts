import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { PostIt } from '../models/post-it';
import { HttpClient } from '@angular/common/http';
import { HomeService } from "./home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  boards: Board[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAll().subscribe(data => {
      console.log("data: " + data);
      this.boards = data;
      console.log(this.boards[0].posts);
    }, 
  error => {
    this.handleError(error);
  });
  }

  newBoard(): void {
    console.log("Adding new board");
    let board: Board = new Board();
    board.name = "Default name " + (this.boards.length + 1);
    board.id = 5;
    board.createdAt = new Date();
    this.boards.push(board);

  }

  deleteBoard(id: number): void {
    console.log("Delete id: ", id);
    this.boards.splice(id, 1);
  }
  handleError(error: any) {
    console.log("Handle error ", error);
  }
}
