# News App

In this application, users can read the news from their original sources, log in and save the news they want to read later. <br /> [Watch Demo](https://drive.google.com/file/d/1j-gXXtCJHGlmjYFMQDTHdTG9mk_ivTTu/view?usp=share_link)

## Features

- Users can see and read current news.
- Users can create an account and log in their account.
- Users can save news to read later after the log in to app.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or higher)
- Expo CLI

## Installation

1. Clone the repository:

```
git clone https://github.com/mehmetsinann/news-app.git
```

2. Navigate to the project directory:

```
cd news-app
```

3. Install dependencies:

```
yarn install
```

## Before Starting news-app
Before running the project, you need to create a `.env` file that contains your Firebase credentials and your News API key. This file will include the secret information that allows the application to access the Firebase server. <br />
For the News API key you can visit this website: https://newsapi.org
### Steps:

1. Create a new file named `.env` in the project directory.
2. Open the `.env` file with a text editor.
3. Add your Firebase credentials and News API key to the file following the format below:

```
API_KEY=api_key
FIREBASE_API_KEY=firebase_api_key
FIREBASE_AUTH_DOMAIN=firebase_auth_domain
FIREBASE_PROJECT_ID=firebase_project_id
FIREBASE_STORAGE_BUCKET=firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=firebase_messaging_sender_id
FIREBASE_APP_ID=firebase_app_id
```

Note: Replace the values such as `api_key`, `firebase_auth_domain`, etc. with your own Firebase project's information. You can access these details by selecting your project in the Firebase console.

After completing these steps, you can start the application and establish a connection with the Firebase server.

## Running the App

1. Start the development server:

```
yarn start
```

2. Open the Expo app(for Android) or the Camera app(for iOS) on your mobile device and scan the QR code displayed in the terminal.
  <br /> Note: Make sure your mobile device is connected to the same network as your development machine.
3. The app will be loaded on your mobile device, and you can now start using news-app.

## Built With

- Expo (React Native)
- Firebase
