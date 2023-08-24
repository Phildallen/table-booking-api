# table-booking-api

get sites:
localhost:3001/sites

get site by site number:
localhost:3001/sites/1

get side by name:
localhost:3001/sites/name/Cardiff

add site:

localhost:3001/sites

{"site":{"siteId": 3,
"siteName": "Cardiff",
"openHours": {
"sunday": "12:00,23:00",
"monday": "11:00,22:00"
},
"tables": {
"fixed2": 4,
"fixed4": 10,
"mobile2": 14,
"mobile4": 10
}}}

amend site:

localhost:3001/sites/1

{"site":{
"openHours": {
"sunday": "09:00,23:00",
"monday": "11:00,23:00"
},
"tables": {
"fixed2": 4,
"fixed4": 10,
"mobile2": 14,
"mobile4": 10
}}}