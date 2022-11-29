const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/:item', async (req, res) => {
    axios.get("https://api.yelp.com/v3/businesses/search",{
        headers: {
            Authorization: `Bearer lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Yx`
        },
        params: {
            term: req.body.item,
            latitude: req.body?.lat,
            longitude: req.body?.log,
            radius: "1600", // ~ 1 mile
            location: req.body?.zipcode
        }
    })
        .then(response => {
            return res.json(response.data.businesses)
        })
        .catch(err => {
            console.log(err.toJSON())
        })
})



module.exports = router;