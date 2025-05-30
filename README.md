
# Feedback System

## Overview
This project is a full-stack application for managing feedback. The backend is built using Express.js and MongoDB, while the frontend is developed with Angular and PrimeNG.

## Backend
- **Technology**: Express.js
- **Database**: MongoDB (running locally)
- **APIs**:
  - **List Feedback**: Retrieve all feedback entries
  - **Create Feedback**: Add a new feedback entry
  - **Edit Feedback**: Retrieve a specific feedback entry for editing
  - **Update Feedback**: Modify an existing feedback entry
  - **Delete Feedback**: Remove a feedback entry

## Frontend
- **Technology**: Angular
- **UI Framework**: PrimeNG
- **Features**:
  - Dashboard view for listing feedback
  - Feedback form for creating and editing feedback
  - Integration with the backend APIs

## Postman Collection
Curl examples for the APIs

* Get Feedback list: 
```curl --location 'http://localhost:3000/api/feedback'```

* Get feedback by id: 
```curl --location 'http://localhost:3000/api/feedback/6838a3be73bafd239b84a64e'```

* Add a feedback
```
curl --location 'http://localhost:3000/api/feedback' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Doe",
    "email": "2john.s@example.odds",
    "rating": 1,
    "feedback": "some feedback"
}'
```

* Update a feedback:
```
curl --location --request PUT 'http://localhost:3000/api/feedback/6838a3be73bafd239b84a64f' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Doe",
    "email": "2john.s@example.odds",
    "rating": 1,
    "feedback": "some feedback"
}'
``` 

## Recordings

**API calls from postman**

![postman-recording](https://github.com/user-attachments/assets/0fd9d58c-fb0d-4e18-b95a-544086dc46c5)

**UI Demo**

![ui-recording](https://github.com/user-attachments/assets/d905f1c4-322c-454d-9c71-36e4e9764417)


## Getting Started
1. **Backend**:
   - Ensure MongoDB is running locally
   - Navigate to the backend directory and run `npm install` followed by `npm start`

2. **Frontend**:
   - Navigate to the frontend directory and run `npm install` followed by `ng serve`
   - Open your browser and go to `http://localhost:4200`
