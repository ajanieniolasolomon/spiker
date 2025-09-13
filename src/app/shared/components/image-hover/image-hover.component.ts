import { Component, Input, ViewChild, ViewContainerRef, Type, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-hover',
  imports: [CommonModule],
  templateUrl: './image-hover.component.html',
  styleUrl: './image-hover.component.scss',
})
export class ImageHoverComponent implements OnDestroy {
  /**
   * The URL of the image to be displayed.
   */
  @Input() imageUrl: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  /**
   * The position of the hover popup relative to the image.
   */
  @Input() position: string = 'bottom-center';

  /**
   * The component class to instantiate inside the popup on hover.
   * Type<any> is used to accept any component class.
   */
  @Input() hoverComponent?: Type<any>;

  /**
   * This is a reference to the <ng-container> in our template.
   * We use it as an anchor to tell Angular where to insert the dynamic component.
   * { read: ViewContainerRef } is crucial to get the container reference.
   */
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  private container!: ViewContainerRef;

  isHovering = false;

  onMouseEnter(): void {
    this.isHovering = true;
    // Only create the component if a class was provided
    if (this.hoverComponent && this.container) {
      // Clear any previous component instance
      this.container.clear();
      // Create a new instance of the component passed via the input
      this.container.createComponent(this.hoverComponent);
    }
  }

  onMouseLeave(): void {
    this.isHovering = false;
    // Clear the container to destroy the component instance for performance
    if (this.container) {
      this.container.clear();
    }
  }

  ngOnDestroy(): void {
    // Ensure the container is cleared if the host component is destroyed
    if (this.container) {
      this.container.clear();
    }
  }
}
