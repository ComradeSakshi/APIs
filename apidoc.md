
 # movies
  http://localhost:9600/action

# hollywood
http://localhost:9600/hollywood

# cartoon
http://localhost:9600/cartoon

# trending
http://localhost:9600/trending

# serial
http://localhost:9600/serial


# collection
http://localhost:9600/collection

// get
# subscrbied
http://localhost:9600/subscribed

// post
# subscription
http://localhost:9600/subscription
{
    { "orderId" : 6,
    "name" : "Kush",
    "email" : "kush@gmail.com",
    "address" : "Hom 10",
    "phone" : 8938279457 
    
    }

}

# watchlist
http://localhost:9600/watchlist    @post
[
  
    "_id": "63c0298822085ca535417046",
    "id": 7,
    "name": "Chahatein",
    "category_id": 11,
    "Age": "15+",
    "image": "https://ibb.co/ZXDT7wx",
    "year": 2020,
    "info": "Preesha's life revolves around her son Saaransh, while Rudraksh is an insensitive rockstar. When an unfortunate event brings these two strangers at a crossroad, there might be a new beginning for them."
  }
]

http://localhost:9600/serial       >get

# delete watchlist
http://localhost:9600/deletewatchlist/"_id": "63c3a11ea06857180bee5645"    @delete


mongodb://localhost:27017
