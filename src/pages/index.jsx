import CardClasesFlores from "components/CardClasesFlores";
import rosas from 'media/rosas.jpg';
import girasoles from 'media/girasoles.jpg';



function Index(){
    return (
   
        <section>
        <h1>Clases de Flores</h1>
       
            <ul className="breedCardContainer"> 
                <CardClasesFlores nombreFlor= 'Rosas' imagen={rosas} />
                <CardClasesFlores nombreFlor= 'Girasoles' imagen={girasoles} />
                
</ul>
</section>

      
    );
}

export default Index;