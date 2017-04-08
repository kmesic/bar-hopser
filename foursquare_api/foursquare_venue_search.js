//import DataFrame from 'pandas-js';
var DataFrame = require('pandas-js').DataFrame;
var urllib = require('urllib');

client_id = 'CJWU111FPB2PCOAESVKKDLN3JHL05CHPK4NIEQILSSDNJ534';
client_secret = 'G1WXTPWV3AVJXIVOYINQNOZSNBUFWBCDPRSJP5SQVJ0KNOGE';

// Input user coordinates here:
p = {'lat': 32.8263819, 'long': -117.12981309999998};    // Northrop Grumman campus

// Radius of search
distance = 5000;

df = new DataFrame();

requested_keys = ['categories','id','location','name','stats'];
category = ['dive bar','pub','brewery'];
category_id = ['4bf58dd8d48988d118941735','4bf58dd8d48988d11b941735','50327c8591d4c4b30a586d5d'];

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
            // data is Buffer instance 
            //console.log(data.toString());

            //data = JSON.loads(data.toString().read());
            //response.close();

            var data_json = JSON.parse(data)            
            console.log(data_json['response']['venues']);

            //var data_df = new DataFrame(data_json['response']['venues'])[requested_keys];
            //df = df.push(data_df,ignore_index=true);

        });
        //time.sleep(1) // stay within API limits
    }
    catch (e) {
        console.error(e);
    }
}
var cat = df['categories'];
var cat_output = cat => {return dict(cat[0])['name']};
df['categories'] = cat_output;

//function (a, b) { return a + b };
//var anon = a => a;
// var anon = (a, b) => { return a + b };
var lat = df['location'];
var loc_output = lat => {return dict(lat)['lat']};
df['lat'] = loc_output;

var long = df['location'];
var long_output = long => {return dict(long)['lng']};
df['long'] = long_output;

var check = df['checkins'];
var check_output = check => {return dict(check)['checkinsCount']};
df['checkins'] = check_output;

ordered_df = df[['name','id','categories','lat','long','checkins']];
ordered_df = new DataFrame();
ordered_df.to_json();
console.log(ordered_df);