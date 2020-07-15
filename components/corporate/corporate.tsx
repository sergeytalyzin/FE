
import "./corporate.less";





const Corporate = () => {

  return (
    <section className="corporate">
      <input id="corp" type="checkbox" className="visually-hidden"/>
      <label htmlFor="corp" className="corporate__label property__label">Корпоротивные компетенции</label>
      <ul className="corporate__list">
        <li className="corporate__list-item"><span className="corporate__list-item--key">Сотрудничество</span><span className="corporate__list-item--span">1</span></li>
        <li className="corporate__list-item"><span className="corporate__list-item--key">Комуникации и убеждения</span><span className="corporate__list-item--span">2</span></li>
        <li className="corporate__list-item"><span className="corporate__list-item--key">Достижение результата</span><span className="corporate__list-item--span">3</span></li>
        <li className="corporate__list-item"><span className="corporate__list-item--key">Системное мышление</span><span className="corporate__list-item--span">3</span></li>
        <li className="corporate__list-item"><span className="corporate__list-item--key">Культура безопастности</span><span className="corporate__list-item--span">2</span></li>
        <li className="corporate__list-item"><span className="corporate__list-item--key">Сотрудничество</span><span className="corporate__list-item--span">1</span></li>
      </ul>
    </section>
  );
};


export default Corporate;










