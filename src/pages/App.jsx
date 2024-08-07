import {NomesMinisterio} from "../components/Ministerios";
import ImagensYouAre from '../assets/imagens/nome_igreja.png'
import style from './styles.module.css'



const  App = () => {
      const handleClick = () => {
        window.location.href = 'https://instagram.com/igrejayouare';
      };
 return (
 <div className= {style.container}>
 <img className={style.image} src={ImagensYouAre} alt="Foto do logo"/>
 <NomesMinisterio name= 'do Atalaias'/>
 <NomesMinisterio name= 'Infantil'/>
 <NomesMinisterio name= 'do Louvor'/>
 <NomesMinisterio name= 'da Zeladoria'/>
 <h3 className={style.style}>Nos siga no Instagram</h3>
 <button className={style.button} onClick={handleClick}>
        Instagram YouAre
      </button>
 </div>
 )  
};

export default App