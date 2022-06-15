import { Link } from 'react-router-dom';

export default function Home() {
    document.title = 'Aula 15/06'
    return (
        <>
            <h1>Página inicial</h1>
            <Link to="/products">Página de produtos</Link>
        </>
    );
}