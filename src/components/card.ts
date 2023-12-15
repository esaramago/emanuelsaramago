import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('es-card')
export class esCard extends LitElement {

  @property() tag = ''
  @property() title = ''
  @property() imagepath = ''
  @property() isimagescrollable = false

  static styles = css`

    img {
      max-width: 100%;
    }
    p, h3 {
      margin: 0;
    }
    p {
      line-height: 1.5
    }

    .c-cards {
      --min: 30rem;
      display: grid;
      justify-content: center;
      gap: var(--gap);
    }
    .c-cards--wide {
      --min: 100%;
    }
    .c-card {
      display: flex;
      flex-direction: row;
      background-color: #FAFAFA;
      border-radius: 2rem;
      box-shadow: 0 .2rem .2rem .1rem rgba(0,0,0,.02);
      padding: var(--gap-lg);
      gap: var(--gap-lg);
    }
    .c-card__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--gap);
    }
    .c-card__img {
      overflow: hidden;
      flex: 2;
      aspect-ratio: 16/9;
      padding: var(--gap-xs);
      border: .5rem solid var(--color-main-200);
    }
    .c-card__img.is-scrollable {
      overflow: auto;
    }
    .c-card > p {
      flex-grow: 1;
    }
    .c-card__heading {
      font-size: 2.6rem;
      line-height: 1.2;
    }
    .c-card__tag {
      display: inline-block;
      text-transform: uppercase;
      font-size: var(--font-size-sm);
    }

    @media (min-width: 768px) {
      .c-cards {
        grid-template-columns: repeat( auto-fit, minmax(var(--min), 1fr) );
      }
    }
    @media (max-width: 767px) {
      .c-card {
        flex-direction: column;
      }
    }
  `

  render() {
    debugger
    return html`
    <div class="c-card">
      ${this.imagepath ? html`
        <div class="c-card__img ${this.isimagescrollable ? 'is-scrollable' : ''}">
          <img src="media/${this.imagepath}.jpg" alt="${this.title}" loading="lazy">
        </div>
      ` : ''}
      <div class="c-card__content">
        <div>
          <span class="c-card__tag">${this.tag}</span>
          <h3 class="c-card__heading">${this.title}</h3>
        </div>
        <slot></slot>
      </div>
    </div>
    `
  }
}