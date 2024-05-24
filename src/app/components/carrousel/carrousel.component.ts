import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

import { ChangeDetectionStrategy, OnInit } from '@angular/core';

let nextId: number = 0;

@Component({
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {
  public componentId: string | undefined = `carousel-id-${nextId++}`;

  public items: string[] = ['1', '2', '3'];
  public frases: string[] = ['Bem vindo', 'ao site', 'de guanabara'];

  public currentPage: number = 0;

  public itemMap: Map<number, string[]> | undefined;

  public itemKeys: number[] | undefined;

  public pageSize: number = 1;

  public numberOfPages: number = 0;

  public isNextDisabled: boolean = true;

  public isPrevDisabled: boolean = true;

  fotos = ['turista','sao','lencois'];

  ngOnInit(): void {
    this.createSliderGroups();
    this.numberOfPages = Math.ceil(this.items.length / this.pageSize);;
    this.calcButtonStates();
  }

  public navToNext(): void {
    if (this.currentPage >= this.numberOfPages - 1) {
      this.reset();
      console.log(this.itemKeys)
    } else {
      this.currentPage = this.currentPage + 1;
      this.navigateToGroup(this.currentPage);
      console.log(this.itemKeys)
    }
  }

  public navToPrev(): void {
    this.currentPage = this.currentPage - 1;
    this.navigateToGroup(this.currentPage);
  }

  private navigateToGroup(groupId: number): void {
    this.calcButtonStates();
    const sliderGroup: Element | null = document.querySelector(
      `#${this.componentId}-group-${groupId}`
    );

    sliderGroup?.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }

  private createSliderGroups(): void {

    
    this.itemMap = new Map();
    let groupIndex: number = 0;

    for (let i: number = 0; i < this.items.length; i += this.pageSize) {
      const group: string[] = this.items.slice(i, i + this.pageSize);

      this.itemMap.set(groupIndex, group);
      groupIndex++;
    }

    this.itemKeys = Array.from(this.itemMap.keys());
  }

  private reset(): void {
    this.currentPage = 0;
    this.navigateToGroup(this.currentPage);
  }

  private calcButtonStates(): void {
    this.isNextDisabled = this.currentPage + 1 >= this.numberOfPages;
    this.isPrevDisabled = this.currentPage <= 0;
  }

  public retornaValor(i: any){
    if(i==1){
      return "texto 1";
    }else if(i==2){
      return "texto2";
  } else{
    return "texto3";
  }
  }
}
