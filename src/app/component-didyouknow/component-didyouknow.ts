import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterModule } from '@angular/router';

import { ServiceDidyouknowApi } from '../service-didyouknow-api/service-didyouknow-api';

@Component({
  selector: 'app-component-didyouknow',
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './component-didyouknow.html',
  styleUrl: './component-didyouknow.css',
  standalone: true,
})
export class ComponentDidyouknow implements OnInit {

  didyouknowList: any[] = [];  // Array para armazenar os dados

  constructor(private apiService: ServiceDidyouknowApi) {}

  ngOnInit(): void {
    // Chama o método do serviço para buscar a lista
    this.apiService.getDidYouKnowList().subscribe(data => {
      this.didyouknowList = data;  // Preenche a lista com os dados do backend
    });
  }
}