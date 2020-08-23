import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/todo.model';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { ApiService } from './../../services/api.service';
@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

    public todo = <todo>{};
    constructor( private router: Router, private todoService:TodoService, private apiService: ApiService) { }
    gitRepos = []
    ngOnInit() {
        this.getData();
     }
     //get git repo data
    getData() {
        this.apiService.getGithubRepos().subscribe( (data: any) => {
            this.gitRepos =  data;
        })
    }
    //add favs
    onSubmitAddForm(data) {
            this.todoService.add(data);
    }

}
