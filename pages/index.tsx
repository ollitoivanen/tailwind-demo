import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        json.forEach((product) => {
          product.price = fixPrice(product.price)
        });
        setProducts(json)});
  }, []);

  //Every number should have two decimal places
  function fixPrice(price: Number){
    let priceString = price.toString()
    if(!priceString.includes(".")) return price
    const numOfDecimals = priceString.split(".")[1].length
    if(numOfDecimals == 2) return price
    const numWithTwoDecimals = priceString + "0"
    return numWithTwoDecimals
  }

  return (
    <div>
      <div className="bg-blue-light w-full flex sticky top-0 z-50 border-b-2 border-black justify-center">
        <h1 className="text-2xl font-bold m-4">Olli's Store</h1>
        <h1 className="text-2xl font-bold m-4 absolute right-0">{basket.length}</h1>

      </div>
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} addToBasket={()=>setBasket([...basket, product])}/>
      ))}
    </div>
    </div>
    
  );
};

export default Home;
