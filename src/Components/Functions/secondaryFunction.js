
export const currency = arg => arg.toLocaleString('ru-RU',
{style: 'currency', currency: 'RUB'});

export const totalPriceItems = order => order.count * order.price;