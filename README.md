https://github.com/Rohith-Patel13/k-rite/issues/1#issuecomment-2014865417



# clone the project in your vs code as below:
```sh
git clone <github_web_URL>
```

# Open terminal

# make split screen (Crtl+Shift+5) In terminal 

# on left terminal use below commands:
```sh
cd client
```

```sh
npm install
```

```sh
npm start
```



# on right terminal use below commands:
```sh
cd server
```
```sh
npm install
```

```sh
touch .env
```

# open .env file and write below code:
```sh
MONGODB_URI = mongodb+srv://<username>:<password>@<hostname>/<database_name>
```

```sh
MY_SECRET_TOKEN_STRING = "LOGIN_SECRET_TOKEN_STRING"
```

# after that on right terminal in server directory run below command
```sh
npm run dev
```
