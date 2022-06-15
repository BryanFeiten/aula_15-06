import { ProductItemTitle } from "./styled";

export default function ProductItem({ title, ref, description , value }) {
    const color = value > 12 ? 'green' : 'red';
    return (
        <div>
            <h2>{ title }</h2>
            <ProductItemTitle color={color}>Referência: </ProductItemTitle> { ref } <br/>
            <ProductItemTitle>Descrição: </ProductItemTitle> { description } <br/>
            <ProductItemTitle>Valor: </ProductItemTitle> R$ { value } <br/>
        </div>
    );
}