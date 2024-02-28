const router = require('express').Router();

const { authorize, showBusy } = require('./index')

router.route('/checkIfBusy').post(async (req, res) => {
    const { timeMin, timeMax } = req?.body;

    try {
        const auth = await authorize();
        const result = await showBusy(auth, timeMin, timeMax);
        res.send(result);
    } catch (error) {
        res.sendStatus(401);
    }

})

module.exports = router;