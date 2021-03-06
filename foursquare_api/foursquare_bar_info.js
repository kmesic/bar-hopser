//import DataFrame from 'pandas-js';
var urllib = require('urllib');

// required per user 
client_id = 'CJWU111FPB2PCOAESVKKDLN3JHL05CHPK4NIEQILSSDNJ534';
client_secret = 'G1WXTPWV3AVJXIVOYINQNOZSNBUFWBCDPRSJP5SQVJ0KNOGE';

// statically set for now 
p = {'lat': 32.8263819, 'long': -117.12981309999998};    // Northrop Grumman campus

// QUESTION 1
// Radius of search
distance = 5000;

requested_keys = ['categories','id','location','name','stats'];
category = ['dive bar','pub','brewery'];
category_id = ['4bf58dd8d48988d118941735','4bf58dd8d48988d11b941735','50327c8591d4c4b30a586d5d'];

// Date and time for url input
var today = new Date();
var day = today.getUTCDate();
if (day < 10) {
    day = '0'+day;
}
var month = today.getUTCMonth();
if (month < 10) {
    month = '0'+day;
}
var year = today.getUTCFullYear();

// Iterate for each category 
for (i = 0; i < 3; i++) {
    var url = 'https://api.foursquare.com/v2/venues/search?ll='+p['lat']+','+p['long']+'&intent=browse&radius='+distance+'&categoryId='+category_id[i]+'&client_id=+'+client_id+'&client_secret='+client_secret+'&v='+''+year+month+day;
    try {
        req = urllib.request(url, function (err, data, res) {
            if (err) {
            throw err; // no handling of error
            }
            console.log(res.statusCode);
            //console.log(res.headers);
            //console.log(data.toString());)
            var data_json = JSON.parse(data.toString()); 
            console.log(data_json.response.venues[0].categories);         
        });
    }
    catch (e) {
        console.error(e);
    }
}