Date.prototype.getDaysQuantity = function (otherDate) {

    const milisecondsDiff = Math.abs(this.getTime() - otherDate.getTime());
    const daysQuantity = Math.floor(milisecondsDiff / (1000 * 3600 * 24));

    console.log('DAYS QUANTITY:', daysQuantity);

    return daysQuantity;
};

const firstDate = new Date('2023.02.24');
const secondDate = new Date('2024.02.24');

firstDate.getDaysQuantity(secondDate);