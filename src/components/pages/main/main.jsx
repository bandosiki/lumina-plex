import React from "react";
import './main.css'


const order_circles_list = [
  { icon: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/icons/icons8-check-50.png', text: 'Бронируете зал' },
  { icon: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/icons/icons8-dollars-64.png', text: 'Вносите предоплату' },
  { icon: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/icons/icons8-telephone-50.png', text: 'Уточняем данные' },
  { icon: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/icons/icons8-party-popper-64.png', text: 'Организуем мероприятие под ключ' }
];
const cards = [
  { title: 'для двоих', text: 'Lorem', img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80' },
  { title: 'для компании', text: 'Lorem', img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80' },
  { title: 'девичники', text: 'Lorem', img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80' }
];
const cards_2 = [
  { title: 'Без посторонних', text: 'Зал только для вашей компании.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Пол из ковролина', text: 'Можно устраивать пижамные вечеринки.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Необычный дизайн', text: 'Оригинальное оформление на любой вкус.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Ваше оформление', text: 'Можно заранее украсить зал.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Большой экран', text: 'Проектор с большим экраном, объёмный звук Dolby Surround', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Караоке', text: 'Можно слушать музыку и петь без ограничений.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Своя еда и напитки', text: 'Можно принести свою еду и напитки ничего не доплачивая.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' },
  { title: 'Индивидуальный подход', text: 'С вами всегда ваш личный помощник.', img: 'https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true' }
];
const cards_3 = [
  { title: 'КОСМОС', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/spacecinema2.jpg' },
  { title: 'МОРСКАЯ СИМФОНИЯ', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/seacinema.jpg' },
  { title: 'ЭТНО', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/etnocinema.jpg' },
  { title: 'ВОСТОК', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/vostokcinema.jpg' },
  { title: 'BLACK ROOM', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/blackroomcinema.jpg' },
  { title: 'НЕБЕСНЫЙ', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/skycinema.jpg' },
  { title: 'БОРДО', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/bordocinema.jpg' },
  { title: 'СКАЗКА', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/cinemaroom/skazkacinema.jpg' },
  { title: 'ТО ЛИ ЕЩЁ БУДЕТ', img: 'https://raw.githubusercontent.com/bandosiki/bandosiki.github.io/main/%D0%BA%D0%B8%D0%BD%D0%BE/blured.png' }
];
function Main() {
  return (
    <div className="main">
      <div className="backgroundImage">
        <div className="header">
          <div>
            Logo
          </div>
          <div className="headertext">
            <h6>ГЛАВНАЯ</h6>
            <h6>УСЛУГИ</h6>
            <h6>ОТЗЫВЫ</h6>
          </div>
        </div>
        <div className="maintext">
          <h1>ЧАСТНЫЙ КИНОТЕАТР LUMINAPLEX</h1>
          <h6>ДЛЯ ДВОИХ • ДЛЯ КОМПАНИИ • ДЕВИЧНИКИ</h6>
          <button><strong>ЗАБРОНИРОВАТЬ</strong></button>
        </div>
      </div>
      <div className="content">
        <h3>УСЛУГИ</h3>
      </div>
      <div className="centerline">
        <button className="spacebtn"></button>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt="" />
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <a href="#" className="button">Find out more</a>
            </div>
          </div>
        ))}
      </div>
      <div className="features">
        <div className="content">
          <h1>LUMINAPLEX - ЧАСТНЫЙ КИНОТЕАТР</h1>
        </div>
        <div className="centerline">
          <button className="spacebtn"></button>
        </div>
        <div className="cards_circles">
          {cards_2.map((card, index) => (
            <div key={index}>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <h5>{card.text}</h5>
            </div>
          ))}
        </div>
        <div className="centerline">
          <button className="spacebtn"></button>
        </div>
        <div className="content">
          <h1>8 ТЕМАТИЧЕСКИХ ЗАЛОВ НА ВЫБОР</h1>
        </div>
        <div className="cards_squares">
          {cards_3.map((card, index) => (
            <div key={index}>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <div className="centerline">
          <button className="spacebtn"></button>
        </div>
        <div className="order">
          <div className="ordertext">
            <h1>ОРГАНИЗОВАТЬ МЕРОПРИЯТИЕ ОЧЕНЬ ПРОСТО</h1>
          </div>
          <div className="order_circles_list">
            {order_circles_list.map((step, index) => (
              <div key={index} className="step">
                <div className="circle">
                  <img src={step.icon} alt="icon" />
                </div>
                <p><strong>{step.text}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main