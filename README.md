# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Работа с сенсорным пользовательским вводом» 

- [макеты](https://github.com/shri-msk-2018-reviewer/shri-18-smarthouse-task-1)

**Для проверки:** [https://apanichkina.github.io/shri-18-smarthouse-task-1/](https://apanichkina.github.io/shri-18-smarthouse-task-1/)

**Проделанная работа:**
1. Для карточки с камерой добавлена обработака следующих событий: 'pointerdown','pointermove', 'pointerleave' см. `public/js/pointer.js`
2. Подключен полифил PEP от jquery для поддержки работоспособности через touch events
3. Реализовано определение перемещения указателя вдоль осей X и Y (медленный свайп), вращение двумя указателями (rotate) и pinch (resize)

**Что не удалось:** 
1. События rotate и pinch тяжело различимы, при неаккуратном ресайзе может измениться яркость и наоборот.
2. Перемещение изображения происходит совсем не плавно, а резко и стремительно. Признаться не знаю как это побороть.
3. Не успела сделать контролы, которые отображают в интерфейсе zoom, яркость и положение видимой обрасти относительно всей картинки.

--- 
##### [Лицензия](https://docviewer.yandex.ru/view/1130000031416187/?*=rPcLBpqhHesbYQxX%2BW33tN%2FZqbR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxODciLCJ5dSI6IjgwMzgwNTc4MDE1MzMwNjc1MzciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4NzYyOTYzMzA5fQ%3D%3D)
