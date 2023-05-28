//Sorting function on the images ket.
module.exports.sortBy = async (req, res) => {
    const { value } = req.params
    const { arr } = req.query
    try {
        const arrSort = arr.sort(function (a, b) {
            var x = a[value]; var y = b[value];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        return res.status(200).send(arrSort)
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}