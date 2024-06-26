import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import img6 from './assets/img6.jpeg';
function App() {


  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const shoeList = [
    { id: 1, img:img1, name: 'Adidas Court80s Men Casual Sneakers', price: 120 , quantity:1 },
    { id: 2, img:img2, name: 'Converse Chuck Taylor All Star Blue Sneakers', price: 170 , quantity:1 },
    { id: 3, img:img3, name: 'Adidas - Forum Low "White/Black" Sneakers', price: 220 , quantity:1 },
    { id: 4, img:img4, name: 'PUMA - CA Pro Classic Leather Sneakers', price: 330 , quantity:1 },
    { id: 5, img:img5, name: 'Stylmartin Double Waterproof Motorcycle Shoes', price: 110 , quantity:1 },
    { id: 6, img:img6, name: "BXXY Men's Red Canvas Sneakers", price: 190 , quantity:1 }
  ];

 

  const addToCart = (shoeitem) => {

    const isItemInCart = cart.some(item => item.id === shoeitem.id);
    if (!isItemInCart) {
      setCart([...cart, shoeitem]);
      setTotal(total + shoeitem.price); 
    }
     else {
      console.log('Item is already in the cart');
    }
  };

  const increaseQuantity = (shoeitem, id) => {
    const updatedCart = cart.map(shoe => shoe.id === id ? { ...shoe, quantity: shoe.quantity + 1 } : shoe );
    setCart(updatedCart);
    setTotal(total + shoeitem.price);
  };

  const decreaseQuantity = (shoeitem, id) => {
    
    const updatedCart =  cart.map(shoe => shoe.id === id ? 
                          {...shoe,  quantity : shoe.quantity > 0 ? shoe.quantity - 1 : 0} 
                          : shoe)
                          .filter(shoe => shoe.quantity > 0);
    setCart(updatedCart);
    setTotal(total - shoeitem.price);
  };

  return (
    <>
     <div className='header' >
        <div className='logo'>
          <img src={logo} alt="..." className=''/>
          </div>
        <div 
        className="nav">
          <a href="#"  className='hover:underline'>Home</a>
          <a href="#"  className='hover:underline'>Categories</a>
          <a href="#"  className='hover:underline'>About Us</a>
        </div>
     </div>

     <div className="content">
      <div className="left">

        {shoeList.map(shoe => (
              <div className="shoe" key={shoe.id}>
                <div className="image"><img src={shoe.img} alt="..."/></div>
                <div className="details">
                <h2>{shoe.name} </h2>
                <h2 id='price'>${shoe.price}</h2>
                </div>
                <div className="btn">
                  <button onClick={() => addToCart(shoe, shoe.id)}>Add to Cart</button>
                </div>
              </div>
               
          ))}
        
{/*i made this div first and then used map to make more divs like this */}
        {/* <div className="shoe">
                <div className="image"><img src={img1} alt="..."/></div>
                <div className="details">
                <h2> Adidas Court80s Men Casual Sneakers</h2>
                <h2 id='price'>$120</h2>
                </div>
                <div className="btn">
                  <button>Add to Cart</button>
                </div>
              </div> */}

      </div>

   
      <div className="right">
          <div className="cartitem">
        <div className="cartsection">
          <h2>Cart</h2>
          <div id="itemList">

          {cart.map((shoe) => (
            <div className="items"  key={shoe.id}>
              <div className="itemimg">
                <img src={shoe.img} alt="..." />
              </div>
              <div className="itemdetail">
                <h2>{shoe.name}</h2>
                <p>${shoe.price}</p>
              </div>
              <div className="itemcounter">
                <button onClick={() => decreaseQuantity(shoe, shoe.id)}>-</button>
                <p>{shoe.quantity}</p>
                <button onClick={() => increaseQuantity(shoe, shoe.id)}>+</button>
              </div>
            </div>
          ))}

          <div className="details">
            <h2>Total</h2>
            <h2 id='total'>${total}</h2>
          </div>
        </div>
        </div>
      </div>

     </div>
     
     </div>
    </>
  )
}

export default App
