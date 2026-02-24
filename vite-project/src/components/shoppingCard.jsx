import React from 'react';
import { ShoppingCart } from 'lucide-react';
import pancakeImg from '../images/pancake.png'
import starIcon from '../images/star.svg' // оранжевая звезда
import starEmptyIcon from '../images/star-empty.svg' // серая звезда


// Компонент звездочки рейтинга
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <img 
          key={i}
          src={i < rating ? starIcon : starEmptyIcon}
          alt="star" 
          className="w-4 h-4"
        />
      ))}
    </div>
  );
};

// Компонент отображения цен
const PriceDisplay = ({ cardPrice, regularPrice, showCardPrice = true, showRegularPrice = true, discount, singlePrice = false }) => {
  // Если только одна цена (без подписей)
  if (singlePrice) {
    return (
      <div className='flex flex-row justify-start mb-4'>
        <span className="text-lg font-bold">{regularPrice} ₽</span>
      </div>
    );
  }

  return (
    <div className='flex flex-row justify-between'>
      {showCardPrice && (
        <div className="flex flex-col items-baseline mb-3">
          <span className="text-lg font-bold">
            {cardPrice} ₽
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {discount ? `С картой (-${discount}%)` : 'С картой'}
          </span>
        </div>
      )}
      
      {showRegularPrice && (
        <div className="flex flex-col items-center mb-4">
          <span className="text-base text-gray-400">
            {regularPrice} ₽
          </span>
          <span className="text-xs text-gray-500">
            Обычная
          </span>
        </div>
      )}
    </div>
  );
};

// Компонент бейджа скидки
const DiscountBadge = ({ discount }) => {
  if (!discount) return null;
  
  return (
    <div className="bg-[#FF6633] text-white text-sm font-bold px-3 py-1 inline-block absolute top-2 left-2">
      -{discount}%
    </div>
  );
};

// Основной компонент карточки товара
const ProductCard = ({ 
  product = {
    id: 1,
    image: pancakeImg,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    cardPrice: 44.50,
    regularPrice: 50.50,
    discount: 50,
    rating: 4,
    showCardPrice: true,
    showRegularPrice: true,
    singlePrice: false // Добавьте это значение по умолчанию
  }
}) => {
  return (
    <div className="w-[272px] mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      
      <DiscountBadge discount={product.discount} />
      
      <div className="p-2">
        <PriceDisplay 
          cardPrice={product.cardPrice}
          regularPrice={product.regularPrice}
          showCardPrice={product.showCardPrice}
          showRegularPrice={product.showRegularPrice}
          discount={product.discount}
          singlePrice={product.singlePrice} 
        />
        
        <h3 className="text-base font-regular text-gray-800 mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        <StarRating rating={product.rating} />
        
        <button className="w-full border border-orange-500 hover:bg-orange-50 p-2 rounded-sm flex items-center justify-center gap-2 transition-colors">
          <ShoppingCart size={18} className="text-orange-500" />
          <span className='text-base text-orange-500'>В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;