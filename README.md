# Book Store Project

## Overview
This is a book store application built with React where users can browse books, add them to their cart, and proceed to checkout. The application supports Google authentication and saves user cart items in Firestore.

## Features
- Browse books based on a search query.
- Add books to a shopping cart.
- View cart and proceed to checkout.
- User authentication with Google.
- Persistent cart items using Firestore.

## Project Structure
The project structure is as follows:

/src: Contains the source code of the application.
/Components: Contains the React components.
/Contexts: Contains the context providers for Cart and Auth.
/Services: Contains service files for API calls.
/public: Contains the public assets and the HTML template.



## Setup Instructions

### Prerequisites
- Node.js (v14.x or later)
- npm or yarn
- A Firebase project with Firestore and Authentication enabled

### Steps to Run the Application

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Sandeep-React/book-store.git
    cd book-store
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up Firebase:**
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Firestore and Google Authentication.
    - Copy your Firebase configuration and update `firebase.js` file in the project.

    ```javascript
    // src/firebase.js
    import firebase from "firebase/compat/app";
    import "firebase/compat/auth";
    import "firebase/compat/firestore";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const db = app.firestore();
    const auth = app.auth();

    export { db, auth };
    ```

4. **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

5. **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Search for books:** Use the search bar to look for books by genre or keyword.
- **Add to cart:** Click on "Add to Cart" button on a book to add it to your shopping cart.
- **View cart:** Navigate to the cart page to see all items in your cart.
- **Checkout:** Proceed to checkout from the cart page.
- **Login/Logout:** Use the "Login with Google" button to authenticate. Once logged in, your name will be displayed with a logout button.

## Additional Notes
- Ensure your Firebase project has the correct Firestore rules and Authentication methods enabled.
- The cart items are saved in Firestore under the user's UID, allowing persistence across sessions.

## Contributions
Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License
This project is open source and available under the [MIT License](LICENSE).
