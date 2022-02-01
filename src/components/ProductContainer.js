import React from 'react';
import styled from 'styled-components';

const ProductContainer = (props) =>{
    return(
        <Container>
            {props.products.map((product, index) => {
                return(
                    <div key={index}>
                        <p>{product.id}</p>
                        <p>{product.img}</p>
                    </div>
                )
            })}
        </Container>
    )

}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow:auto;
    `

export default ProductContainer;