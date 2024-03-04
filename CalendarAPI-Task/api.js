const router = require('express').Router();

const { showBusy } = require('./index')

router.route('/checkIfBusy').post(async (req, res) => {
    const { apiKey, timeMin, timeMax } = req?.body;

    try {
        const result = await showBusy(apiKey, timeMin, timeMax);
        res.send(result);
    } catch (error) {
        res.sendStatus(401);
    }

})

module.exports = router;