import React from "react";
import "./app.less";

import MainInformation from "../main-information/main-information";
import Education from "../education/education";
import Corporate from "../corporate/corporate";
import AdditionalRequirements from "../additional-requirements/additional-requirements";





const App = () => {

  return (<React.Fragment>
    <header className="header">
      <p>Планирование численности/Мастер 2020/Таблица/Организационный дизайн/Позиции/Мои прямые подчиненные</p>
    </header>
    <main className="main">
      <div className="main__wrapper">
        <p className="main__properties">Свойства</p>
        <p className="main__value">Значение</p>
      </div>
      <MainInformation/>
      <Education/>
      <Corporate/>
      <AdditionalRequirements/>

    </main>
    </React.Fragment>
  );
};


export default App;













