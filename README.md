# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Работа с сенсорным пользовательским вводом» 

- [макеты](https://github.com/shri-msk-2018-reviewer/shri-18-smarthouse-task-1)

**Для проверки:** [https://apanichkina.github.io/shri-18-smarthouse-task-1/](https://apanichkina.github.io/shri-18-smarthouse-task-1/)

**Проделанная работа:**
1. Для карточки с камерой добавлена обработака следующих событий: 'pointerdown','pointermove', 'pointerleave' см. `public/js/pointer.js`
2. Подключен полифил PEP от jquery для поддержки работоспособности через touch events
3. Реализовано 3 жеста: перемещение указателя вдоль осей X и Y (медленный свайп), вращение двумя указателями (rotate) и pinch (resize)
4. Я организовала всю обработку в классе `InteractiveElement`, который принимает в конструктор элемент ( в нашем случае картинку). В методе `init()` навешиваются обработчики на необходимые события. Обработчики (`onPointerDown, onPointerMove, onPointerLeave`)тоже являются методами класса, поскольку требуется работать с общим массивом активных событий (пльцев на экране) `this.pointers`. Методы, обрабатыващие жесты (`checkPinch, checkRotate, checkSwipe`) определяют по изменению координат тот ли это жест. Для соответствующих жестов вызываются методы **updateScale**, **updatePosition** или **updateFilter**, которые меняют css. 
5. Добавлены индикаторы яркости и зума
6. Зум может принимать значения от 1 до 10. Предполагается, что для видеонаблюдения кейс с уменьшением зума  менее 1 не актуален.
7. Довольно сложно далось примыкание краев картинки и видимой области (см `public/js/pointer.js updatePosition()`). Например: при зуме 1:1 нельзя перемещаться по оси Y. Если сум выше, то можно перемещать по вертикали, но только пока верхний край картинки не совпадет с верхней границей окна. 

**Что не удалось:** 
1. События rotate и pinch тяжело различимы, при неаккуратном ресайзе может измениться яркость и наоборот.
2. Не успела сделать контрол, который отображает положение видимой обрасти относительно всей картинки.
3. При ресайзе фокус перемещается в середину картинки. Это связано с положением оси ноды. Предполагемое решение: веред выставлением scalе перенести начало координат (transform-origin) в среднюю точку между пальцами.

--- 
##### [Лицензия](https://docviewer.yandex.ru/view/1130000031416187/?*=rPcLBpqhHesbYQxX%2BW33tN%2FZqbR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxODciLCJ5dSI6IjgwMzgwNTc4MDE1MzMwNjc1MzciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4NzYyOTYzMzA5fQ%3D%3D)
