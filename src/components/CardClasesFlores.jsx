import {Link} from 'react-router-dom'

function CardClasesFlores({nombreFlor, imagen }) {
    return (
        <li className="breedCard"> 
            <Link to='/rosas'>    
            
                <div className="contenedorImagen">
                  <img src={imagen} alt={nombreFlor} />
                </div>
            </Link>
            <span className="breedTitle">{nombreFlor}</span>
        </li>
    );
}

export default CardClasesFlores;