# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Мультимедиа» 

- [текст дз](https://github.com/mad-gooze/shri-2018-2-multimedia-homework)

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
1. Список источников для видео и их порядок описан в `public/mocks/videos.js`
2. Видео располагаются в Grid контейнере и занимают максимально доступную ширину в рамках ячейки
3. Режим fullscreen реализован с памощью popup, который по умолчанию скрыт (`public/js/popup.js`). При раскрытии popup к нему через appendChild добавляется нужное видео. При закрытии видео возвращается в исходный контейнер темже механиизмом.
4. Для <video/> скрыты дефолтные контролы (play, pause, volume ...) так как предметная область - камеры наблюдения, которые вещают в потоке.  
5. Анализатор звука визуализируется с помощью canvas (показывается частотная характеристика) `public/js/audioAnalyser.js`
6. Яркость и контраст регулируются посредством css filter

--- 
##### [Лицензия](https://docviewer.yandex.ru/view/1130000031416187/?*=rPcLBpqhHesbYQxX%2BW33tN%2FZqbR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxODciLCJ5dSI6IjgwMzgwNTc4MDE1MzMwNjc1MzciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4NzYyOTYzMzA5fQ%3D%3D)


## UPD

Код переведен на typescript. Проект запускается также (см выше), обязательно запустить стриминг видео. Для проверки дз по адаптивности перейти на вкладку "События".

**Возникшие сложности:**

1 В при работе с dom элементами почти всегда нужно проверять что они не null, поскольку они вытаскиваются по css селекторам.

2 В работе с шаблонизацией на основе  <template/> все не гладко с точки зрения типов. Мешаются один и тот же элемент выступает как Node и как HTMLElement.
Например:
```sh
const template = document.getElementsByTagName('template')[1];
const musicTmpl = template.content.querySelector<HTMLTemplateElement>('.music');
const music = musicTmpl ? musicTmpl.cloneNode(true) as HTMLElement : null;
if (music) {
  const image: HTMLInputElement | null = music.querySelector('.music__album-cover');
  ...
}
```
3 Использование pointer events и audio context требует переопределения интерфейса Window в модуле. Хотя сами типы PointerEvent и AudioContext описаны в `lib.dom.d.ts`.
```sh
declare global  {
  interface Window {
    PointerEvent: typeof PointerEvent;
  }
}
```
4 При описании формата данных поля `data` из `events.json` в интерфейсе использовалось объединение типов `TCardData = ICardDataGraph | IIndicatorData | ICardDataMusic | ICardDataButtons | ICardDataCamera;`.
При этом когда используетя содержимое этого поля (`events[0].data`) необходимо пытаться привести его к одному из подтипов (`events[0].data as ICardDataGraph`).

В целом в процессе перевода кодовой базы на ts были найдены мелкие ошибки типа "ожидалась строка, а вернули число" и пришло осознание, что querySelector может вернуть null.

Дальше планирую писать на ts.
