
import "./main-information.less";





const MainInformation = () => {

  return (
    <section className="main-information">
        <input id="inf" type="checkbox" className="visually-hidden"/>
      <label htmlFor="inf" className="main-information__label property__label">Общая информация</label>
        <ul className="main-information__list">
          <li className="main-information__list-item"><span className="main-information__list-item--key">Документ</span><span className="main-information__list-item--span">Профиль требования к должности</span></li>
          <li className="main-information__list-item"><span className="main-information__list-item--key">Должность</span><span className="main-information__list-item--span">Инженер</span></li>
          <li className="main-information__list-item"><span className="main-information__list-item--key">Функциональное направление</span><span className="main-information__list-item--span">Логистика</span></li>
          <li className="main-information__list-item"><span className="main-information__list-item--key">Специлизация</span><span className="main-information__list-item--span">Обслуживание и ремонт механического,энергетического и электрооборудования</span></li>
        </ul>
      </section>
  );
};


export default MainInformation;










