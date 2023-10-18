import Header from '../../components/Header';
import CarCard from '../../components/CarCard';
import './styles.css';
import CommentCard from '../../components/CommentCard';
import Footer from '../../components/Footer';

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
                <section id='dsct-comment-section'>
                    <div>
                        <h2>O que estão dizendo</h2>
                    </div>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </section>
                <Footer />
            </main>
        </>
    );
}