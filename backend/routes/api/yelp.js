const express = require('express');
const router = express.Router();
const Yelp = require('yelpv3');


router.post('/:item', async (req, res, next) => {
    let request = new Yelp({
    // axios.create({
        // headers: {
        //     Authorization: `Bearer lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Y`
        // }
        api_key: 'lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Y'
    })
    request.search({term: req.params.item, limit: '3' })
        .then(function(data) {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    // console.log("inside the router")
    // // console.log(temp)
    // request
    //         .get('https://api.yelp.com/v3/businesses/search', {
    //             params: {
    //                 term: req.params.item
    //             }
    //         })
    //         .then(response => {
    //             console.log(response.data)
    //             // console.log(response.data.businesses)
    //             return res.json(response.data.businesses)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
})

module.exports = router;