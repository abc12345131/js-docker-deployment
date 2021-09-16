
const ajax = require('../api/ajax')
const {GOOGLE_API_KEY} = require('../config/config')

exports.readShops = (req, res, next) => {

    const {latitude, longitude, keyword} = req.query
    let apiUrl
    if(keyword) {
        apiUrl= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?language=EN&location=${latitude},${longitude}&radius=3000&type=restaurant&keyword=${keyword}&key=${GOOGLE_API_KEY}`
    }
    else {
        apiUrl= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?language=EN&location=${latitude},${longitude}&radius=3000&type=restaurant&key=${GOOGLE_API_KEY}`
    }
    ajax(apiUrl) 
        .then(data => {
            res.send({status: 0, data})
        })
        .catch(error => {
            console.error('Get shops exception', error)
            res.send({status: 1, msg: 'Get shops exception, please try again!'})
        })
}
  