function orderByTotal(arr, sortingType='') {

    try {
        if(!(sortingType === '+' || sortingType === '-')) throw new Error('Please enter sorting type');
        if(typeof arr !== 'object' || arr?.length === 0) throw new Error('You need to enter a non empty array..');

        const newArrWithTotal = arr.map((order, index) => {
            if(Number.isInteger(order.amount) && Number.isInteger(order.quantity)) {
                return {
                    ...order,
                    Total: order.amount * order.quantity
                }
            }
            
            throw new Error(`Incorrect data in element at ${index} index`)
        });

        let sortedArray = null;

        if(sortingType === '+') {
            sortedArray = newArrWithTotal.sort((a, b) => a.Total - b.Total);
        } else if (sortingType === '-') {
            sortedArray = newArrWithTotal.sort((a, b) => b.Total - a.Total);
        }

        return sortedArray;

    } catch (error) {
        console.error(error, error.message)
    }


}

const array = [{amount: 10000, quantity: 10}, {amount: 10, quantity: 5}];

console.log('Input array:', array, '\n');
console.log('Output array:', orderByTotal(array, '+'), '\n');
console.log('Input array:', array);