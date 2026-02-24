function Header() {
  return (
    <>
    <header className="header flex items-center mx-[116px] h-[72px] justify-center">

      <nav className="nav flex text-[color:var(--color-Onprimary)] gap-[40px] justify-center">
          <img src="/src/images/logo.svg"></img>
        <div className="flex items-center gap-[16px]">
        <button className="flex items-center rounded-sm px-[8px] w-[140px] h-[40px] gap-[16px] bg-[color:var(--color-secondary)]">
          <img 
            src="src/images/menu.svg"
            alt="Каталог" 
            className=""
          />
          <span className="text-base">Каталог</span>
        </button>

        <button className="flex items-center rounded-sm border border-[var(--color-secondary)] px-[8px] w-[375px] h-[40px] gap-[16px] bg-[color:var(--color-Onprimary)]">
          
          <input
            type="text"
            placeholder="Найти товар"
            className="text-base text-[color:var(--gray-hard)] px-[8px] w-[375px] h-[40px]"
          />
          <img 
            src="src/images/search.svg"
            alt="Каталог" 
            className=""
          />
        </button>
        </div>

        <nav className="flex items-center gap-[24px]">
          <nav className="flex items-end gap-[24px]">
            <div className="flex flex-col items-center gap-[8px]">
              <img src="src/images/like.svg"></img>
              <span className="text-xs text-[color:var(--color-Onsurface)]">Избранное</span>
            </div>

            <div className="flex flex-col items-center gap-[8px]">
              <img src="src/images/order.svg"></img>
              <span className="text-xs text-[color:var(--color-Onsurface)]">Заказы</span>
            </div>

            <div className="flex flex-col items-center gap-[8px]">
              <img src="src/images/basket.svg"></img>
              <span className="text-xs text-[color:var(--color-Onsurface)]">Корзина</span>
            </div>
          </nav>

          <div className="flex items-center">
            <img src="src/images/avatar.png"></img>
            <span className="ml-[10px] text-base text-[color:var(--color-Onsurface)]">Алексей</span>
            <img src="src/images/chevron-down.svg" className="ml-[18px]"></img>
          </div>
        </nav>
      </nav>
 
    </header>
    </>
  );
}

export default Header;