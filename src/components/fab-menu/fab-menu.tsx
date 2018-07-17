import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'fab-menu',
  styleUrl: 'fab-menu.scss'
})

export class FabMenu {
  @State() isOpen: boolean = false;
  @State() showBg: boolean = false;

  @Prop({ reflectToAttr: true, mutable: true }) open = false;
  @Prop({ reflectToAttr: true, mutable: true }) fixed = false;

  @Element() root: HTMLElement;

  handleClick(e) {
    if (e.target.href == undefined) {
      e.preventDefault();
    }
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.showBg = true;
      window.requestAnimationFrame(_ => {
        setTimeout(_ => {
          this.open = true;
        });
      });
    } else {
      this.open = false
    }
  }

  handleTransEnd() {
    if (!this.isOpen) {
      this.showBg = false;
    }
  }

  componentDidLoad() {
    this.root.addEventListener('click', e => this.handleClick(e));
    this.root.addEventListener('transitionend', _ => this.handleTransEnd());
  }

  render() {
    return ([
      <div class="cta-scrum" hidden={!this.showBg}></div>,
      <div class="cta-fab">
        <slot name="icon" />
      </div>,
      <div class="cta-list-wrapper">
        <ul class="mdc-list">
          <slot />
          <li class="mdc-list-item close">
            <span class="mdc-list-item__graphic">
              <i class="material-icons" aria-hidden="true">close</i>
            </span>
            Close
          </li>
        </ul>
      </div>
    ]);
  }
}
