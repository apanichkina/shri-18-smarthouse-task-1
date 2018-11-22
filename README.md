# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Фреймворк» 

**Для проверки:** 

1.Запустить сервер отдачи видео на порту 9191

`git clone https://github.com/mad-gooze/shri-2018-2-multimedia-homework.git)`

`npm i`
 
`npm start`

2.В данном репозитории

`npm i`

`npm start`

открыть `http://localhost:9000/`

3.Мобильный вид рекомендуется проверять на **Android**.
(Удобно проверять через Remote Devices в Chrome c опцией Port forwarding на порты 9000, 9191, 3102)

**Проделанная работа:**

В рамках дз про созданию flux фреймворка в `public/js/index.ts` созданы экземпляры EventEmitter и Dispatcher. Фреймворк позволяет обслуживать одним диспетчером несколько сторов, но для демонстрации достатьчно одного. 

Стор применен для навигации в шапке страницы. Роутинг обслуживается редьюсером `routesManager`. 

Дополнительно текущая страница запомирнается в `localStorage`, откуда при перезагрузке страницы стор получает `initialStore` состояние. 
Также для демонстрации перерисовки страницы при асинхронном запросе заведен эмулятор сетевого запроса за events с зажержкой `3000 мс`. Зайдите на вкладку "События" и наблюдайте прелоадер, по истечении заданной задержки появятся карточки событий. Причем описанное получение событий не вызывает перерисовки других вкладок (например Видеонаблюдение). 

-- 
##### [Лицензия](https://docviewer.yandex.ru/view/1130000031416187/?*=rPcLBpqhHesbYQxX%2BW33tN%2FZqbR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxODciLCJ5dSI6IjgwMzgwNTc4MDE1MzMwNjc1MzciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4NzYyOTYzMzA5fQ%3D%3D)
