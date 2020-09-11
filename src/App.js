import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Products from './components/products/products';
import ProductDetail from './components/detail/productDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getData } from './server/server';
import {useDispatch, useSelector} from 'react-redux'
import { getInitData } from './stateManager/actionCreator';

function App() {
  const init = {
    products: [
      { name: 'product 1', id: '1' },
      { name: 'product 2', id: '2' },
      { name: 'product 3', id: '3' },
      { name: 'product 4', id: '4' },
    ]
  }

  const {products, selectedPrductId, cart, loading} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getData()
      .then(res => {
        dispatch(getInitData(res.items))
      })
      // .then(()=> setTimeout(()=>{console.log(products)},1000))
  },
    []
  )




  return (
    <div className="">
      <Layout>
        <Router>
          <Route path='/' exact>
            {!loading ? <Products products={products} /> : 'Please wait...'}
          </Route>
          <Route path='/detail' exact>
            <ProductDetail />
          </Route>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
