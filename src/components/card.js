import {LitElement, html, css} from 'lit'

export class esCard extends LitElement {
  static properties = {
    tag: '',
    title: '',
    imagePath: '',
    isImageScrollable: false,
  }
  constructor() {
    super()

    this.tag = this.getAttribute('tag')
    this.title = this.getAttribute('title')

    this.imagePath = this.getAttribute('image-path')
    this.isImageScrollable = this.getAttribute('is-image-scrollable')
  }

  static styles = css`

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
      .c-cards--wide .c-card {
        flex-direction: column;
      }
    }
  `

  render() {
    return html`
    <div class="c-card">
      ${this.imagePath ? html`
        <div class="c-card__img ${this.isImageScrollable}">
          <img src="img/${this.imagePath}" alt="${this.title}" loading="lazy">
        </div>
      ` : ''}
      <div class="c-card__content">
        <div>
          <span class="c-card__tag">${this.tag}</span>
          <h3 class="c-card__heading">${this.title}</h3>
        </div>
        <p>I can make the design of your website.</p>
      </div>
    </div>
    `
  }
}
customElements.define('es-card', esCard)