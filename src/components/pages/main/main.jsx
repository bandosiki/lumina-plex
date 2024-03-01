import React from "react";
import './main.css'
const Main = () => {
  return (
    <div>
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
    </div>
    </div>

  )
}
const styles = {

};
export default Main