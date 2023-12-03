//  1. Создайте новый элемент добавьте ему текст и добавьте его после элемента с id "existingElement".
let newElem = document.createElement('p');
newElem.innerText = 'Text';
let existingElement = document.querySelector('#existingElement')
existingElement.after(newElem);

// 2. Создайте новый элемент, добавьте ему текст и вставьте его внутрь элемента с id "parentElement"
let newElem1 = document.createElement('p');
newElem1.innerText = 'Text for parentElement';
let parentElem = document.querySelector('#parentElement');
parentElem.append(newElem1);

// 3. Удалите элемент с классом "removeMe".
let removeElem = document.querySelector('.removeMe').remove();

// 4. Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count)
let productArray = [{
        title: 'Iphone X',
        unit_price: 800,
        count: 1
    },
    {
        title: 'Iphone 11',
        unit_price: 900,
        count: 3
    },
    {
        title: 'Iphone 13 Pro',
        unit_price: 1000,
        count: 4
    },
    {
        title: 'Iphone 14',
        unit_price: 1100,
        count: 4
    },
    {
        title: 'Iphone 15 Pro Max',
        unit_price: 1300,
        count: 7
    }];

// 5. Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество.

function showProducts(array) {
    let sum = document.createElement('p');
    sum.innerText = 0;
    let counter = document.createElement('p');
    counter.innerText = 0;

    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div');
        card.style.border = '2px solid red';
        card.style.marginBottom = '5px';
        card.style.width = '200px';
        
        let name = document.createElement('p');
        name.innerText = array[i].title;
        let price = document.createElement('p');
        price.innerText = Number(array[i].unit_price);
        let count = document.createElement('p');
        count.innerText = Number(array[i].count);
        
        card.append(name, price, count);
        document.body.append(card);
        sum.innerText = Number(price.innerText)+Number(sum.innerText);
        counter.innerText = Number(count.innerText) + Number(counter.innerText);
    };

    document.body.append(`Сумма: ${Number(sum.innerText)}; `, ` Количество: ${counter.innerText}`);
};

showProducts(productArray);

