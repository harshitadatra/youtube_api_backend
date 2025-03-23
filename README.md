# YouTube API Backend - README

## Overview
This backend application allows users to interact with YouTube videos via API. It enables fetching video details, updating video titles, adding comments, loading all comments, and deleting comments.

## Base URL
```
https://your-app.onrender.com
```

---

## **API Endpoints**

### 1️⃣ **Fetch Video Details**
**Endpoint:** `GET /video/:videoId`
- **Description:** Retrieves details of a specific YouTube video.
- **URL Example:**
  ```
  GET /video/OCihNlEvN3w
  ```
- **Response:**
  ```json
  {
    "_id": "67e07b9673aff983deae9222",
    "videoId": "OCihNlEvN3w",
    "title": "If you're a Software Engineer, You have to watch this (Save Next ",
    "__v": 0
  }
  ```

---

### 2️⃣ **Update Video Title**
**Endpoint:** `POST /video/update-title`
- **Description:** Updates the title of a YouTube video and stores it in the database.
- **Request Body:**
  ```json
  {
    "videoId": "OCihNlEvN3w",
    "newTitle": "Updated Video Title"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "67e07b9673aff983deae9222",
    "videoId": "OCihNlEvN3w",
    "title": "If you're a Software Engineer, You have to watch this (Save Next ",
    "__v": 0
  }
  ```

---

### 3️⃣ **Add a Comment**
**Endpoint:** `POST /video/comment`
- **Description:** Adds a comment to a specific video.
- **Request Body:**
  ```json
  {
    "videoId": "OCihNlEvN3w",
    "text": "test3"
  }
  ```
- **Response:**
  ```json
  {
    "videoId": "OCihNlEvN3w",
    "text": "test3",
    "_id": "67e080445fcab18a44a0e574",
    "createdAt": "2025-03-23T21:42:28.185Z",
    "__v": 0
  }
  ```

---

### 4️⃣ **Load All Comments**
**Endpoint:** `GET /comment/:videoId`
- **Description:** Retrieves all comments for a specific video.
- **URL Example:**
  ```
  GET /comment/OCihNlEvN3w
  ```
- **Response:**
  ```json
  [
    {
      "videoId": "OCihNlEvN3w",
      "text": "test1",
      "_id": "67e080445fcab18a44a0e571",
      "createdAt": "2025-03-23T21:42:28.185Z",
      "__v": 0
    },
    {
      "videoId": "OCihNlEvN3w",
      "text": "test2",
      "_id": "67e080445fcab18a44a0e572",
      "createdAt": "2025-03-23T21:42:28.185Z",
      "__v": 0
    }
  ]
  ```

---

### 5️⃣ **Delete a Comment**
**Endpoint:** `DELETE /video/comment/:commentId`
- **Description:** Deletes a specific comment from a video.
- **URL Example:**
  ```
  DELETE /video/comment/c2
  ```
- **Response:**
  ```json
  {
    "message": "Comment deleted"
  }
  ```

---

## **How to Use This API in Postman**
1. Open **Postman**.
2. Select the HTTP method (**GET**, **POST**, **DELETE**).
3. Enter the **endpoint URL**.
4. For `POST` requests, go to the **Body** section → Select **raw** → Choose **JSON** format.
5. Click **Send** to test the API.

---

## **Environment Variables (.env File)**
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase
PORT=5000
```

---





