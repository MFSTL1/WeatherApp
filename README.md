My own Weather App.

This application allows you to check the current weather and the forecast for the next 3 days for the cities of Hamburg and Gliwice.  
Before using the app you need to obtain your own API key from the website https://www.weatherapi.com/  
The app allows you to store your API key on your device and load it.  

To prepare the backend server for start, create an .env in the directory /Backend/WeatherApiApp/API file and insert there the following informations,  
AES_ENCRYPTION_KEY={// here you insert your aes encryption key}  
SECRET_KEY = ' here you insert your secret key'  
DEBUG = False // here you set whether you want to use the server in debug mode or not  

Also before launching the background server make sure to download the dependencies listed below:  
aes==1.2.0  
Django==5.1.2  
djangorestframework==3.15.2  
python-dotenv==1.1.0  
Requests==2.32.3  

or use command   
pip install -r requirements.txt  
in the directory with the requirements file.  

To start the backend server. please ensure that you have the Python in version 3 or above and the dependencies installed and run the following command in the directory of the Scripts folder ( /Backend/WeatherAppApi/env/Scripts).  
activate.bat  
and in the directory /Backend/WeatherAppApi/API  
python manage.py runserver 127.0.0.1:8000  
in the directory with the manage.py file   

To prepare the Frontend server you have to install the following dependencies:  
@types/react-dom@18.3.6  
@types/react@18.3.20  
@typescript-eslint/eslint-plugin@7.18.0  
@typescript-eslint/parser@7.18.0  
@vitejs/plugin-react@4.3.4  
autoprefixer@10.4.21  
axios@1.8.4  
eslint-plugin-react-hooks@4.6.2  
eslint-plugin-react-refresh@0.4.19  
eslint-plugin-react@7.37.5  
eslint@8.57.1  
postcss@8.5.3  
react-dom@18.3.1  
react@18.3.1  
tailwindcss@3.4.17  
typescript@5.8.3  
vite@5.4.18  

In order to start the frontend server you must run the following command:  
npm run dev  

If you want to run your frontend server locally you can install simple http server eg. serve and run the build version of the app on it  
npm install -g serve  
then navigate to the Frontend folder and execute the following command (in the directory /Frontend/react-ts)  
serve -s dist  
Afterwards you can connect to the server  
