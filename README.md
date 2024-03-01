# [🔗 GUVI Day 41 task] Node-JS Assign-Mentor

## Created task deployed on below link :

<a href="https://assignmentor-backend-nodejsexpressjs.onrender.com/" target="_blank">https://assignmentor-backend-nodejsexpressjs.onrender.com/</a>

## for getting all Mentors & Students details

get method: </br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/

## for creating new Mentor

post method: </br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/mentor </br>
body: </br>
{"name":"Sathish"}

## for creating new student

post method: </br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/student </br>
body: </br>
{"name":"Boobathi"}

## for assigning a student to mentor

post method: </br>
Format: URL/assign/:mentorId/:studentId </br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/assign/64b0c0125679577bd7c1a39c/64b0c0585679577bd7c1a3a0

## for reassigning mentor to student

post method: </br>
Format: URL/reassign/:mentorId/:studentId</br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/reassign/64b0c03b5679577bd7c1a39e/64b0c0585679577bd7c1a3a0


## for getting particular mentors student list

get method: </br>
Format: URL/mentor/mentorId</br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/mentor/64b0c03b5679577bd7c1a39e

## for getting particular student previous mentor details 

get method: </br>
Format: URL/student/:studentId</br>
https://assignmentor-backend-nodejsexpressjs.onrender.com/student/64b0c0585679577bd7c1a3a0
