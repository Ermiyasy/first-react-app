import gamecard from './asset/gamecard.jpg'
function Bodyer(){
    return(

        <div className="card">
                <img className='card-image' src={gamecard} alt="Game card " />
                <h2 className='card-'>Ermiyas Eshetu</h2>
                <p className='card-text'>This is the frist Card in react</p>
        </div>
    );

}

export default Bodyer