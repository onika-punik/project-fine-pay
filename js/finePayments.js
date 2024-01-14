"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener("click", payFine);
function payFine() {
  if (!validateFields()) {
    return;
  }

  let fine = findFine(fineNumber.value);
  if (fine) {
    if (fine["сума"] != amount.value) {
      alert("Сума не співпадає");
      return;
    }
    DB = DB.filter((f) => f["номер"] != fine["номер"]);
    alert("Штраф номер " + fine["номер"] + " сплачено");
  } else {
    alert("Штраф за номером не знайдено");
  }
}

function findFine(fineNumber) {
  return DB.find((fine) => fine["номер"] == fineNumber);
}

function validateFields() {
  if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]{2}[0-9]{6}$/.test(passport.value)) {
    alert("Не вірний паспортний номер");
    return false;
  }

  if (!/^4\d{3} *\d{4} *\d{4} *\d{4}$/.test(creditCardNumber.value)) {
    alert("Не вірна кредитна картка");
    return false;
  }

  if (!/^\d{3}$/.test(cvv.value)) {
    alert("Не вірний cvv");
    return false;
  }
  return true;
}
