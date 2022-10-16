import React from "react";
import CountButton from "../../view/Button";

import classes from "./BatchCounter.module.css";

export const BatchCounter = () => {
  const [count, setCount] = React.useState(0);
  const [showBadWord, setShowBadWord] = React.useState(false);

  const increment = () => {
    console.log("first update");
    setCount((c) => ++c); // Так можно, потому что тут не копия возвращается, а уже инерементированное значение

    // setCount(count++) // Выдаст ошибку, это ж констата. И даже если будет не константа, то при постфиксе будет возвращаться копия и обновления будут не на каждый клик
    // setCount(count => count++); // Работать не будет, потому что каждому рендеру свое окружение(замыкание)
    
    console.log("second update");
    setCount((count) => count + 1);
    setShowBadWord((s) => !s);

    /**
     * Батчинг - это процесс группировки нескольких обновлений состояния в один 
     * этап рендеринга. https://habr.com/ru/post/577168/
     * 
     * В реакте обновления состояни - это ассинхронная операция, т.е при состояние 
     * изменяется не сразу после вызова сеттера, а потом.
     * 
     * Если в обработчике события или в эффекте было несколько обновлений состояния,
     * то реакт такой смотрит на эти несколько изменений состояния и говорит: "Оу щит, 
     * ты хочешь изменить состояние несколько раз, окай, тогда я выполню эти несколько 
     * действий, изменю стейт и только потом отрисую интерфейс."
     * 
     * Это и называется батчингом. 
     * 
     * И этот батчинг(до 17 версии) работает ТОЛЬКО в эффектах и обработчиках.
     * В ассинхронных действиях (setTimeout, промисах, запросах) обновления стейта не батчились.   
     */
  };

  const asyncIncrement = () => {
    /**
     * Функция инкримента вызывается не в обработчике события, а уже в обработчике
     * промиса(ассинхронная операция) и поэтому батчинга не будет.
     * 
     *  сообщение на строке * сработает два раза при нажатии на кнопку "Async increment +"
     * 
     * !И это в 16 версии ДО 18!
     * 
    */
    Promise.resolve().then(() => {
      increment();
    });
  };

  // Смотрим сколько раз выполнится рендер компонента.
  console.log("render"); // *

  return (
    <div>
      Count: {count}
      <CountButton onClick={increment} className={classes.btn}>
        Sync increment +
      </CountButton>
      <CountButton onClick={asyncIncrement} className={classes.btn}>
        Async increment +
      </CountButton>
      {showBadWord && <div className="bad-word">ASS</div>}
    </div>
  );
};
