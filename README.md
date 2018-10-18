# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Мультимедиа» 

- [текст дз](https://github.com/mad-gooze/shri-2018-2-multimedia-homework)

**Для проверки:** 

1.Запустить сервер отдачи видео на порту 9191

`git clone https://github.com/mad-gooze/shri-2018-2-multimedia-homework.git)`

`npm i`
 
`npm start`

2.В данном репозитории (ветка **video**)

`npm i`

`npm start`

открыть `http://localhost:9000/`

3.Мобильный вид рекомендуется проверять на **Android**.
(Удобно проверять через Remote Devices в Chrome c опцией Port forwarding на порты 9000, 9191, 3102)

**Проделанная работа:**
1. Список источников для видео и их порядок описан в `public/mocks/videos.js`
2. Видео располагаются в Grid контейнере и занимают максимально доступную ширину в рамках ячейки
3. Режим fullscreen реализован с памощью popup, который по умолчанию скрыт (`public/js/popup.js`). При раскрытии popup к нему через appendChild добавляется нужное видео. При закрытии видео возвращается в исходный контейнер темже механиизмом.
4. Для <video/> скрыты дефолтные контролы (play, pause, volume ...) так как предметная область - камеры наблюдения, которые вещают в потоке.  
5. Анализатор звука визуализируется с помощью canvas (показывается частотная характеристика) `public/js/audioAnalyser.js`
6. Яркость и контраст регулируются посредством css filter

--- 
##### [Лицензия](https://docviewer.yandex.ru/view/1130000031416187/?*=rPcLBpqhHesbYQxX%2BW33tN%2FZqbR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxODciLCJ5dSI6IjgwMzgwNTc4MDE1MzMwNjc1MzciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4NzYyOTYzMzA5fQ%3D%3D)
