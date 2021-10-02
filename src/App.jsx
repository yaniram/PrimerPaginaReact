import CardClasesFlores from 'components/CardClasesFlores';
import logo from 'media/logo flores.png';
import 'styles/styles.css';
import rosas from 'media/rosas.jpg';
import girasoles from 'media/girasoles.jpg';

function App() {
  return (
    <div className="App">
         <header>
        <ul className="navbar">
            
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
         
        <li>
            
            <button className="botonGenerico mainButton"> + Nuevo post</button>
        </li>
        
            
        <li>
            <div className="buscar">
                
                <input placeholder="Buscar nombre de flor"  />
                <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
                </li>
        <li>
            
            
           
            <button className="botonGenerico secondaryButton"> Login</button>
        </li>
        <li>
           
            <button className="botonGenerico mainButton"> Registro</button>
            </li>
        
        </ul>
    </header>
    <main>
        <section>
            <h1>Clases de Flores</h1>
           
                <ul className="breedCardContainer"> 
                    <CardClasesFlores nombreFlor= 'Rosas' imagen={rosas} />
                    <CardClasesFlores nombreFlor= 'Girasoles' imagen={girasoles} />
                    
    </ul>
</section>
<section></section>
</main>
<footer></footer>
</div>
  );
}



export default App;
