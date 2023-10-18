import './styles.css';
import carImg from "../../assets/car.png";

export default function CarCard() {
    return (
        <section id='dsct-car-card-section'>
            <div className='dsct-car-card-container'>

                <div className='dsct-car-card-contents'>
                    <img src={carImg} alt="Carro" />
                    <h3>Lorem ipsum dolor</h3>
                </div>
            </div>
        </section>
    );
}