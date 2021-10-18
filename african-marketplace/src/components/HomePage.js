import React from 'react';
import styled from 'styled-components';

const BannerImage = styled.img`
    max-width: 100%;
`

export default function HomePage() {
    return (
        <>
        <div className='Title'>
    <h1> African MarketPlace </h1>
    </div>
<div className='image'>
    <BannerImage src = 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600' alt='grocery-store' />
</div>
<div className='explanation'>
    <h2> Questions: </h2>
    <h3> What is African MarketPlace?</h3>
    <p> It is a project built by web developers to empower small business owners. </p>
</div>
</>
    )
}