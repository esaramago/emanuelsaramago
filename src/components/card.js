import {LitElement, html, css} from 'lit'

export class esCard extends LitElement {
  static properties = {
    title: '',
  };

  static styles = css`
  .c-cards {
    --min: 30rem;
    display: grid;
    justify-content: center;
    gap: var(--gap);
  }
  .c-cards--wide {
    --min: 50rem;
  }
  .c-card {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    padding: var(--gap) var(--gap-lg);
    background-color: #FAFAFA;
    border-radius: 2rem;
    box-shadow: 0 .3rem .5rem .1rem rgba(0,0,0,.05);
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
  `

  render() {
    return html`
    <div class="c-card">
      <div>
        <span class="c-card__tag">Design & Development</span>
        <h3 class="c-card__heading">Geotur</h3>
      </div>
      <p>A travel website</p>
      <a href="https://geotur.es">geotur.es</a>
    </div>
    `
  }
}
customElements.define('es-card', esCard);