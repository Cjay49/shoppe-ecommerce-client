import './Homepage.css'
import Button from '../../ui-components/Button/Button'
import ProductCard from '../../ui-components/ProductCard/ProductCard'
import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { demoProductData } from '../../demoData/demoProductData';
// import { useNavigate } from 'react-router-dom's


const Homepage =() => {

//   const navigate = useNavigate();

// const linkTo = (link) => {
//     navigate(link)
// }


  const data =  demoProductData
  console.log(data)

  document.querySelector('title').textContent = 'Shoppe - Home'

  return (
    <main className='homePage'>
      <div className="img-container">
        <img src="/images/heroImg.png" alt="Hero Image" />

      <div className="hero-section">
        <h1>Gold Big Hoops</h1>
        <h2>${'68,000'}</h2>
        <Button className={'hero-btn'} btnType={'ghostWhite'} setBorder={'smooth'}>view product</Button>
        </div>
        <div className="hero-controls">
        <IoIosRadioButtonOff className='white expand'/>
        <FaCircle className='white'/>
        <FaCircle className='white' />
        <FaCircle  className='white'/>
        <FaCircle  className='white'/>
        </div>
      </div>

<section className="product-showcase">
  <header>
    <h1>Shop The Latest</h1> <Button btnLink={'/shop'} btnType={'ghost'} className={'gold'}>View All</Button>
  </header>
  <main>
    {
      data && data.map(el => {
        return <ProductCard key={el.productId} productImg={el.productImg} productLink={`shop/${el.productId}`} productTitle={el.productTitle} productPrice={el.productPrice}/>
      })
    }
  </main>
</section>
    </main>
  )
}

export default Homepage