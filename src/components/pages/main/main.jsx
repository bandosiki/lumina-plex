import React from "react";
import './main.css'
const Main = () => {
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
          <h3>ОРГАНИЗУЕМ ЯРКИЙ МИНЕТОСИК</h3>
          <h6>ДЛЯ ДВОИХ • ДЛЯ КОМПАНИИ • ДЕВИЧНИКИ</h6>
          <button><strong>СТАТЬ МАМОНТОМ</strong></button>
        </div>
      </div>
      <div className="content">
        <h3>УСЛУГИ</h3>
        <button className="spacebtn"></button>
      </div>
      <div className="cards">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
          <div class="card-content">
            <h2>
              для двоих
            </h2>
            <p>
              Lorem
            </p>
            <a href="#" class="button">
              Find out more
            </a>
          </div>
        </div>
        <div class="card">
          <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
          <div class="card-content">
            <h2>
              для компании
            </h2>
            <p>
              Lorem
            </p>
            <a href="#" class="button">
              Find out more
            </a>
          </div>
        </div>
        <div class="card">
          <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
          <div class="card-content">
            <h2>
              девичники
            </h2>
            <p>
              Lorem
            </p>
            <a href="#" class="button">
              Find out more
            </a>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="content">
          <h1>Luminaplex - частный кинотеатр</h1>
          <button className="spacebtn"></button>
        </div>
        <div className="cards_circles">
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Без посторонних</h3>
            <h5>Зал только для вашей компании.</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Пол из ковролина</h3>
            <h5>Можно устраивать пижамные вечеринки.</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Необычный дизайн</h3>
            <h5>Оригинальное оформление на любой вкус.</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Ваше оформление</h3>
            <h5>Можно заранее украсить зал.</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Большой экран</h3>
            <h5>Проектор с большим экраном, объёмный звук Dolby Surround</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Караоке</h3>
            <h5>Можно слушать музыку и петь без ограничений.</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Своя еда и напитки</h3>
            <h5>Можно принести свою еду и напитки ничего не доплачивая.</h5>
          </div>
          <div>
            <img src="https://github.com/bandosiki/bandosiki.github.io/blob/main/%D0%BA%D0%B8%D0%BD%D0%BE/pajama%20party.jpg?raw=true"></img>
            <h3>Индивидуальный подход</h3>
            <h5>С вами всегда ваш личный помощник.</h5>
          </div>
          <button className="spacebtn"></button>
        </div>
        <div className="cards_squares">
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <article>
            <figure><img src="https://assets.codepen.io/605876/person.png" /></figure>
            <h2>Mike's mindful morning</h2>
            <p>Course • Mindful Mike</p>
          </article>
          <button className="spacebtn"></button>
        </div>
        <div className="order">
          <div className="ordertext">
          <h1>ОРГАНИЗОВАТЬ МЕРОПРИЯТИЕ ОЧЕНЬ ПРОСТО</h1>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Main