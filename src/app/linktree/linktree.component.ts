import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-linktree',
  templateUrl: './linktree.component.html',
  styleUrls: ['./linktree.component.less'],
})

export class LinktreeComponent implements OnInit, OnDestroy {
    constructor(private router: Router) {}
    ngOnInit(): void {
        
    }
    ngOnDestroy() {
        
    }
}