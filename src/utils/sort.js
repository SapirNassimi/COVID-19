const sortByProperty = (data, firstProperty, secondProperty, isDescending) => {
    if (data) {
        secondProperty ? 
            data.sort((a, b) => b[firstProperty][secondProperty] - a[firstProperty][secondProperty]) :
            data.sort((a, b) => b[firstProperty] - a[firstProperty]);

        if (!isDescending) {
            data.reverse();
        }
    }
}

module.exports = {
    sortByProperty
}