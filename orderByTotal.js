function orderByTotal(arr) {
    if(typeof arr !== 'object' || arr?.length === 0) throw new Error('You need to enter a non empty array..')

    try {
        const newArrWithTotal = arr.map((order, index) => {
            if(Number.isInteger(order.amount) && Number.isInteger(order.quantity)) {
                order.Total = order.amount * order.quantity;
                return order
            }
            
            throw new Error(`Incorrect data in element at ${index} index`)
        });

        const sortedArrayByIncreasing = newArrWithTotal.sort((a, b) => a.Total - b.Total);
        console.log(sortedArrayByIncreasing);

        return sortedArrayByIncreasing;
    } catch (error) {
        console.error(error)
    }


}

orderByTotal([{amount: 10000, quantity: 10}, {amount: 10, quantity: 5}])