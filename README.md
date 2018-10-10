# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Адаптивная вёрстка» 

- [макеты](https://github.com/shri-msk-2018-reviewer/shri-18-smarthouse-task-1)

**Для проверки:** [https://apanichkina.github.io/shri-18-smarthouse-task-1/](https://apanichkina.github.io/shri-18-smarthouse-task-1/)

**Проделанная работа:**
1. Сверстана статичная страничка по макету с применением гридов (сетка секции `<main/>`) и флексбоксов (внутриности `card`, `header` и `footer`);
2. Применена техника простейшей шаблонизации на базе тега <template/> для отображения множества карточек и их вариативного содержимого. Верстка шаблонов размечена в начале страницв `index.html`. Логика отрисовки шаблонов лежит в `public/js/cardTemplate.js`.
3. Данные берутся из мока, размещенного в `public/mocks/events.json`
4. Для отрисовки графика использована библиотека [chart.js](http://www.chartjs.org/docs/latest/)
5. Для удобного использования иконок исходные assets были приведены к одному размеру 52x52px и пожаты [svgo](https://github.com/svg/svgo). Растровые изображения были сжаты [imageOptim](https://imageoptim.com).
6. Стили написаны на синтаксисе [PostCSS](https://postcss.org). Применены mixin, extend, variables, custom-media, property-lookup.
7. Для сборки бандла стилей и скриптов (см `public/dist`) использован Webpack
        

**Сомнительные моменты:** 
1. Подключение иконок для карточек (`public/js/icons.js`) методом ручного импорта и сопоставления типа карточки с назанием иконки. Лучшего способа не нашла.
2. Попытка увязать размер шрифта и line-height в один кусок и его extend  (`public/css/typography.css`)
3. Верстка блока с аудиоплеером на flexbox
4. Не реализовано меню в мобильном виде
5. Возможно, данные из `public/mocks/events.json` перед отрисовкой нужно хотя бы отсортировать по времени. Я не стала это делать из соображений, что клиентсайд доверяет API.
--- 
##### [Лицензия](https://docviewer.yandex.ru/view/1130000031416187/?*=rPcLBpqhHesbYQxX%2BW33tN%2FZqbR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxODciLCJ5dSI6IjgwMzgwNTc4MDE1MzMwNjc1MzciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4NzYyOTYzMzA5fQ%3D%3D)
