
module.exports.getCurrentPage = async (req, res) => {
    try {
        const { arr, selectedPage, limit } = req.body.data;
        const page = parseInt(req.body.data.page);
        const results = {};
        let startIndex = (page) * limit;
        let endIndex = (page + 1) * limit;
        results.page = page;
        switch (selectedPage) {
            case "prev":
                {
                    results.disabledPrev = page <= 0 ? true : false
                    results.disabledNext = false
                    break;
                }
            case "next": {
                results.disabledPrev = false
                results.disabledNext = endIndex >= arr.length ? true : false;
                if (results.disabledNext) {
                    endIndex = arr.length
                }
                break;
            }
            case null: {
                results.disabledPrev = page <= 0 ? true : false
                results.disabledNext = false;
            }
        }
        results.results = arr.slice(startIndex, endIndex);
        return res.status(200).send(results);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }

}


