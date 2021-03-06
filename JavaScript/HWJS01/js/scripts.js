"use strict";
/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let login = prompt("Введите ваш логин, пожалуйста:");
let answerToUser = "";
if(login==null){
    answerToUser ='Отменено пользователем!';
}else if(login != adminLogin){
    answerToUser = 'Доступ запрещен, неверный логин!';
}else{
    let password = prompt("Введите ваш пароль, пожалуйста:");
    if(password==null){
        answerToUser = 'Отменено пользователем!';
    }else if(password != adminPassword){
        answerToUser = 'Доступ запрещен, неверный пароль!';
    }else{
        answerToUser = 'Добро пожаловать!';
    }
}
alert(answerToUser);

let sharm = 15;
let hurgada = 25;
let taba = 6;

let numberOfPlaces = prompt("Пожалуйста, введите число необходимых мест:");
// let answerToUser = "";
if(numberOfPlaces==null){
    answerToUser = "Нам очень жаль, приходите еще!";
}else if(numberOfPlaces == NaN || Number(numberOfPlaces) < 0){
    answerToUser = "Ошибка ввода";
}else{
    let password = prompt("Введите ваш пароль, пожалуйста:");
    if(password==null){
        answerToUser = 'Отменено пользователем!';
    }else if(password != adminPassword){
        answerToUser = 'Доступ запрещен, неверный пароль!';
    }else{
        answerToUser = 'Добро пожаловать!';
    }
}
alert(answerToUser);
  
 
/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/