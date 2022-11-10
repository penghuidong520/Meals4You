const express = require('express');
const router = express.Router();
const axios = require('axios');


// router.post('/:item', async (req, res) => {

//     let request = axios.create({
//         headers: {
//             Authorization: `Bearer lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Y`
//         }
//     })
//     console.log("inside the router")
//     // console.log(temp)
//     request
//             .get('https://api.yelp.com/v3/businesses/search', {
//                 params: {
//                     term: req.params.item,
//                     location: "nyc"
//                 }
//             })
//             .then(response => {
//                 console.log(response.data)
//                 // console.log(response.data.businesses)
//                 res.json(response.data.businesses)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
// })

router.post('/:item', async (req, res) => {

    axios.get("https://api.yelp.com/v3/businesses/search",{
        headers: {
            Authorization: `Bearer lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Yx`
        },
        params: {
            term: req.params.item,
            location: "nyc"
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