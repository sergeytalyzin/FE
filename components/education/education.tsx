
import "./education.less";





const Education = () => {

  return (
    <section className="education">
      <input id="ed" type="checkbox" className="visually-hidden"/>
      <label htmlFor="ed" className="education__label property__label">Образование</label>
      <ul className="education__list">
        <li className="education__list-item"><span className="education__list-item--key">Степень</span><span className="education__list-item--span">Высшее/Среднее высшее</span></li>
        <li className="education__list-item"><span className="education__list-item--key">Специлизация</span><span className="education__list-item--span">Инженер-техник</span></li>
      </ul>
    </section>
  );
};


export default Education;










