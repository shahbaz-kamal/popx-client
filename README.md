<div align="center">
  <img height="400" src="https://github.com/shahbaz-kamal/popx-client/blob/main/src/assets/git_banner.png"  />
</div>

###

<h1 align="left">popX Website</h1>

###

<p align="left">PopX is a simple account management platform where users can create an account, log in, and register using Firebase authentication. It enforces password security with rules requiring a minimum of 6 characters, one uppercase, and one lowercase letter. The platform includes a private profile page that is only accessible to logged-in users; anyone trying to access the profile page without being logged in will be redirected to the homepage. On the profile page, users can view their name, email, and profile photo (if uploaded). Built with React and Firebase, PopX ensures a secure and seamless user experience.</p>

###

## 🔗 Live Link



###

<p align="left">https://popx-website-by-shahbaz.netlify.app/</p>

###
## 🔗 Git Server



###

<p align="left">https://github.com/shahbaz-kamal/popx-server</p>

###




## ✨ Features:

###

1. **User Authentication**

   - Secure registration and login with Firebase Authentication.

2. **Password Security**

   - Passwords must be at least 6 characters long and contain at least 1 uppercase and 1 lowercase letter.

3. **Private Profile Page**

   - The profile page is protected and can only be accessed by logged-in users. Non-logged-in users are redirected to the homepage if they try to access the profile URL directly.
4. **Profile Information**

   - On the profile page, users can view their name, email, and profile photo (if uploaded during account creation).



###

## 🛠 Technology Used

###

<!-- end -->
 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
   <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  />
  <img width="12" />
     <img src="http://skillicons.dev/icons?i=express" height="40" alt="express logo"/>
     <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />
  <img width="12" />
   
</div>


###
###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###

<!-- start -->
<p align="left">"axios": "^1.8.4",<br>    "firebase": "^11.5.0",<br>    "localforage": "^1.10.0",<br>    "match-sorter": "^8.0.0",<br>    "react": "^19.0.0",<br>    "react-dom": "^19.0.0",<br>    "react-icons": "^5.5.0",<br>    "react-router-dom": "^7.4.0",<br>    "sort-by": "^1.2.0",<br>    "sweetalert2": "^11.17.2"</p>

###
<!-- end -->



###

## 🔧 Installation Guidline:

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Front End</span>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/71-digital-sign-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a firebase project and a file named .env.local in your root folder & use your firebase credintials as follows:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_api_id
VITE_IMAGE_HOSTING_KEY=your_image_hosting_ke
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

5. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend</span>
  <img src="https://cdn-icons-png.flaticon.com/128/16318/16318927.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

###

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/71-digital-sign-server.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Put your Mongodb uri in the constant named uri.
5. Create a MongoDB user by keeping username and password collected & create a .env file in the root directory and put the following code:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_Password
ACCESS_TOKEN_SECRET=token_secret_for_jwt_token
PAYMENT_SECRET_KEY=stripe_secret_key
```

6. Put the following code instead of <db_username>:

```bash
${process.env.DB_USER}
```

7. Put the following code instead of <db_password>:

```bash
${process.env.DB_PASS}
```

8. Run the following command and open the website locally on port 5000:

```bash
npm start
```



###
