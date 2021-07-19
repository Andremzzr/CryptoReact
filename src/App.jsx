import React, {useState, useEffect} from 'react';
import Coin from './Coin';


import './App.css';
import axios from 'axios';



function App() {
  const [coins, setCoins] = useState([]);


  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase());
  }
    
  )


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false').then(res=> {
      setCoins(res.data);
     
    }).catch(err => {
      console.log(err);
    })
  }, []);


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">
          Search a currency
          </h1>
          <form action="">
          <input type="text" placeholder="search" onChange={handleChange} className='coin-input'/>

          </form>

      </div>

      <table>
        
           <tr>
                <th>Image Coin</th>
                <th>Coin Name</th>
                <th>Symbol</th>
                <th>Price (USD)</th>
                <th>Volume in 24h</th>
                <th>Price Change</th>
                <th>Market Cap</th> 
            </tr>

     
            
              {filteredCoins.map(coin =>  {
                 return <Coin 
                 name={coin.name} 
                 volume={coin.total_volume} 
                 symbol={coin.symbol} 
                 key={coin.id} 
                 image={coin.image} 
                 price={coin.current_price} 
                 priceChange={coin.price_change_percentage_24h} 
                 marketcap={coin.market_cap} />
                })}
                
             
              
              
           

      </table>
      
      



    </div>
  );
}

export default App;
