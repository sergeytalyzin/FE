
import "./additional-requirements.less";





const AdditionalRequirements = () => {

  return (
    <section className="additional-requirements">
      <input id="additional" type="checkbox" className="visually-hidden"/>
      <label htmlFor="additional" className="additional-requirements__label property__label">Дополнительные требования</label>
      <ul className="additional-requirements__list">

        <li className="additional-requirements__list-item instruments">
          <div>
            <input id="additional2" type="checkbox" className="visually-hidden instruments__input"/>
            <label htmlFor="additional2" className="additional-requirements__label instruments__label">Инструменты</label>
            <ul className="instruments__list">
              <li className="additional-requirements__list-item instruments__list-item"><span className="instruments__list-item--key">SAP ERP</span><span className="instruments__list-item--span">Продвинутый уровень</span></li>
              <li className="additional-requirements__list-item instruments__list-item"><span className="instruments__list-item--key">SAP HR</span><span className="instruments__list-item--span">Продвинутый уровень</span></li>
            </ul>
          </div>

        </li>

        <li className="additional-requirements__list-item languages">
          <div>
            <input id="additional3" type="checkbox" className="visually-hidden languages__input"/>
            <label htmlFor="additional3" className="additional-requirements__label additional-requirements__label-languages languages__label">Иностранные языки</label>
            <ul className="languages__list">
              <li className="additional-requirements__list-item languages__list-item"><span className="languages__list-item--key">Английский</span><span className="languages__list-item--span">Продвинутый уровень</span></li>
            </ul>
          </div>
        </li>

      </ul>
    </section>
  );
};



export default AdditionalRequirements;










