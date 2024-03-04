Date.prototype.getDaysQuantity = function (otherDate) {

    try {
        if(!(otherDate instanceof Date)) throw Error('Your value is not a Date..')

        const milisecondsDiff = Math.abs(this.getTime() - otherDate.getTime());
        const daysQuantity = Math.floor(milisecondsDiff / (1000 * 3600 * 24));

        return daysQuantity;
    } catch (error) {
        console.log(error, error.message);
    }
};


const firstDate = new Date('2023.02.24');
const secondDate = new Date('2024.02.24');

console.log(firstDate.getDaysQuantity(secondDate));