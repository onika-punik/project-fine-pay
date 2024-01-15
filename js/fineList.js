"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */

    var searchedFines = [];
    if (searchKey === "") {
        searchedFines = DB;
    }
    for (let i = 0; i < DB.length; i++) {
        if (DB[i].номер === searchKey){
            searchedFines.push(DB[i]);
        } else if (DB[i].тип === searchKey) {
            searchedFines.push(DB[i]);
        }
    }
 
    return searchedFines;
}

