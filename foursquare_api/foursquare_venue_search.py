import urllib2
import json
import datetime
import pandas as pd
import math
import time

from pandas import DataFrame


client_id = "CJWU111FPB2PCOAESVKKDLN3JHL05CHPK4NIEQILSSDNJ534"
client_secret = "G1WXTPWV3AVJXIVOYINQNOZSNBUFWBCDPRSJP5SQVJ0KNOGE"

# Input user coordinates here:
#p = {'lat': 37.7833, 'long': -122.4167}    # central San Francisco, at Van Ness and Market
p = {'lat': 32.8263819, 'long': -117.12981309999998}    # Northrop Grumman campus 

# Radius of search 
distance = 5000

df = DataFrame()
requested_keys = ["categories","id","location","name","stats"]
category = ["dive bar","pub","brewery"]
category_id = ["4bf58dd8d48988d118941735","4bf58dd8d48988d11b941735","50327c8591d4c4b30a586d5d"]

for i in range(0,3):
    url = "https://api.foursquare.com/v2/venues/search?ll=%s,%s&intent=browse&radius=%s&categoryId=%s&client_id=%s&client_secret=%s&v=%s" % (p["lat"],p["long"], distance, category_id[i], client_id, client_secret, time.strftime("%Y%m%d"))
    try:
        req = urllib2.Request(url)
        response = urllib2.urlopen(req)
        data = json.loads(response.read())
        response.close()
    
        data = DataFrame(data["response"]['venues'])[requested_keys]
        print data
        df = df.append(data,ignore_index=True)
        time.sleep(1) # stay within API limits

    except Exception, e:
        print e
            


df["categories"] = df["categories"].apply(lambda x: dict(x[0])['name'])
df["lat"] = df["location"].apply(lambda x: dict(x)["lat"])
df["long"] = df["location"].apply(lambda x: dict(x)["lng"])
df["checkins"] = df["stats"].apply(lambda x: dict(x)["checkinsCount"])

ordered_df = df[["name","id","categories","lat","long","checkins"]]
ordered_df.to_csv("foursquare_bars_sd.csv", index=False)