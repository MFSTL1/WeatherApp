My own Weather App for the recruitment.

To prepare the backend server for start, create an .env file and insert there the following informations,
AES_ENCRYPTION_KEY={// here you insert your aes encryption key}
SECRET_KEY = ' here you insert your secret key'
DEBUG = False // here you set whether you want to use the server in debug mode or not

To start the backend server. please ensure that you have the Python in version 3 or above and the dependencies installed and run the following command.
python manage.py runserver 127.0.0.1:8000

To prepare the Frontend server you have to install the following dependencies:

In order to start the frontend server you must run the following command:
npm run dev

If you want to run your frontend server locally you can install simple http server eg. serve and run the build version of the app on it
npm install -g serve
then navigate to the Frontend folder and execute the following command
serve -s dist
Afterwards you can connect to the server
