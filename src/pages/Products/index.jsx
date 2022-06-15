import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';

export default function Products() {
    document.title = 'Aula 15/06 - Produtos'
    return (
        <>
            <h1>Página de produtos</h1>
            <Link to="/">Página inicial</Link>
            <hr/>
            <br/>
            <ProductItem title='Produto 1' reference='REF001' description='Desc 1' value={10.50} />
            <hr />
            <ProductItem title='Produto 2' reference='REF002' description='Desc 2' value={15.50} />
            <hr />
            <ProductItem title='Produto 3' reference='REF003' description='Desc 3' value={11.50} />
        </>
    );
}
