import React from "react";

const Main = () => {
  return (
    <div>
      <div style={styles.container}>
        <div>
          Image
        </div>
        <div>главная услуги отзывы</div>
      </div>
      Main
    </div>
  )
}
const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '8vh',
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '0 250px'
  }
};
export default Main