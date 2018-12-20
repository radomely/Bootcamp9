/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
"use strict";

let guest, name;
name = "Mango";
guest = name;
console.log(guest);

/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

const day = "02";
const month = 10;
const year = 2017;

const date = day + "\\" + month + "\\" + year;

console.log(date); // 02\10\2017

/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

const yourName = prompt("Please enter your name!");
alert(yourName);

/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

const name2 = "Mango";
const date2 = "14/08/2031";
const roomType = "люкс";

const message = `${name2} прибывает на отдых ${date2} в ${roomType}.`;

console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth;

//totalWidth = Number(padding) + Number(border) + Number(contentWidth) + 'px';
totalWidth =
  parseInt(padding) + parseInt(border) + parseInt(contentWidth) + "px";

console.log(totalWidth); // '125px'
