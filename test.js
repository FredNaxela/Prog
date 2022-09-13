'use strict'
const bitcoin = +prompt('Какой курс Биткоина сегодня?');
const dollar = +prompt('Сколько $ хотите обменять?');
const res = alert(`Вы можете купить ${dollar / bitcoin} BTC`)