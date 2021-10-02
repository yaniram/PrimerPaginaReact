function CardClasesFlores({nombreFlor, imagen }) {
    return (
        <li className="breedCard"> 
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreFlor} />
            </div>
            <span className="breedTitle">{nombreFlor}</span>
        </li>
    )
}

export default CardClasesFlores;