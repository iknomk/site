import ProductCard from "./shoppingCard.jsx";
import pancakeImg from '../images/pancake.png'
import productsImg from '../images/products.png' // Добавил импорт для products.png
import bgImage from '../images/bg.png' // Добавил импорт для фона
import milkIcon from '../images/milk.png'
import sausagesOrange from '../images/orangee_sausage.png'
import blackSausage from '../images/black_sausage.png'
import sausage from '../images/sausages.png'

// Примеры использования с разными данными
export const ProductExamples = () => {
  const products = [
    {
      id: 1,
      image: pancakeImg,
      name: "Г/Ц Блинчики с мясом вес, Россия",
      cardPrice: 44.50,
      regularPrice: 50.50,
      discount: 0,
      rating: 2,
      showCardPrice: true,
      showRegularPrice: true
    },
    {
      id: 2,
      image: milkIcon,
      name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
      cardPrice: 44.50,
      regularPrice: 50.50,
      discount: 10,
      rating: 3,
      showCardPrice: true,
      showRegularPrice: true
    },
    {
      id: 3,
      image: sausagesOrange,
      name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      cardPrice: 44.50,
      regularPrice: 50.50,
      discount: null,
      rating: 5,
      showCardPrice: false,
      showRegularPrice: false,
      singlePrice: true
    },
    {
      id: 4,
      image: sausage,
      name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
      cardPrice: 44.50,
      regularPrice: 50.50,
      discount: 15,
      rating: 4,
      showCardPrice: true,
      showRegularPrice: true
    }
  ];

  return (
    <div className="flex flex-row gap-[40px] px-[116px]">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

function Main() {
    return(
        <>
        <section 
          className="flex h-[200px] bg-cover bg-center" 
          style={{ backgroundImage: `url(${bgImage})` }}
        >
            <img className="ml-[140px]" src={productsImg} alt="products" />
            <span className="flex text-gray-800 text-[48px] mr-[140px] font-bold items-center">
              Доставка бесплатно от 1000₽
            </span>
        </section>
        <main>
            <section>
                <p className='text-[36px] font-bold mx-[116px] my-[40px]'>Акции</p>
                <ProductExamples /> 
            </section>
            
        </main>
        </>
    )
}

export default Main;