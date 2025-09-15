import { Component, Input, ViewChild, ViewContainerRef, Type, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-hover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-hover.component.html',
})
export class ImageHoverComponent implements OnDestroy {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() position: string = 'bottom-center';
  @Input() hoverComponent?: Type<any>;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  private container!: ViewContainerRef;

  isHovering = false;

  onMouseEnter(): void {
    this.isHovering = true;
    if (this.hoverComponent && this.container) {
      this.container.clear();
      this.container.createComponent(this.hoverComponent);
    }
  }

  onMouseLeave(): void {
    this.isHovering = false;
    if (this.container) {
      this.container.clear();
    }
  }

  ngOnDestroy(): void {
    if (this.container) {
      this.container.clear();
    }
  }
}


