const sortByProperty = (data, firstProperty, secondProperty, isAscending) => {
    secondProperty ? 
        data.sort((a, b) => b[firstProperty][secondProperty] - a[firstProperty][secondProperty]) :
        data.sort((a, b) => b[firstProperty] - a[firstProperty]);

    if (isAscending) {
        data.reverse();
    }
}

module.exports = {
    sortByProperty
}