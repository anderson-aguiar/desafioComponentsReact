import Header from '../../components/Header';
import CarCard from '../../components/CarCard';
import './styles.css';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <h2>Venha nos visitar</h2>
                </div>
                <CarCard />
                <CarCard />
                <section id='dsct-comment-card-section'>

                </section>
            </main>
        </>
    );
}