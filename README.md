# shri-18-smarthouse-task-1
Школа разработки интерфейсов - 2018 II / ДЗ - «Node js» 

## Текст задания
Написать сервер на express который будет подниматься на 8000 порту и обрабатывать два роута: 1. /status — должен выдавать время, прошедшее с запуска сервера в формате hh:mm:ss 2. /api/events — должен отдавать содержимое файла events.json. При передаче get-параметра type включается фильтрация по типам событий. При передаче некорректного type — отдавать статус 400 "incorrect type". (`/api/events?type=info:critical`) Все остальные роуты должны отдавать `<h1>Page not found</h1>`, с корректным статусом 404.

## Как запустить

`node v10.12.0`

`npm install`

`npm run server`

[http://localhost:8000](http://localhost:8000/api/events?type=info)

## Где искать код

Код сервера находится `server/server.js`, также в папке `server` лежат дополнительные модули, используемые для работы сервера.

По запросу `/api/events?type=info:critical` файл раздается из `server/hostedFiles/events.json`
