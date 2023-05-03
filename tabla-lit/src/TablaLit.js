import { html, css, LitElement } from 'lit';

export class TablaLit extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--tabla-lit-text-color, #000);
    }
  `;

  const clima = async (id)=>{
    try{
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json()
        const pokemon ={
            img : data.sprites.other.dream_world.front_default,
            name : data.name,
            hp : data.stats[0].base_stat,
            xp : data.base_experience,
            ataque : data.stats[0].base_stat,
            especial : data.stats[1].base_stat,
            defensa : data.stats[2].base_stat
            

        }
        pintarCard(pokemon)

    }catch(error){
        console.log(error)
    }
 }

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    
  }

  render() {
    return html`
      <h2>prueba</h2>
      
    `;
  }
}
