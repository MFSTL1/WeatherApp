from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from .models import Storage
import aes
import requests





class CurrentWeather(APIView):
    def post(self,request):
        api_key = request.data.get("api_key")


        link1 = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q=Gliwice&aqi=no";

        link2 = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q=Hamburg&aqi=no";
        try:
            responseHamburg = requests.get(link1)
            responseHamburg.raise_for_status()
            responseGliwice = requests.get(link2)
            responseGliwice.raise_for_status()
            return Response({
                "hamburg": responseHamburg.json(),    "gliwice": responseGliwice.json()}, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({"error": str(e)})

class Forecast(APIView):
    def post(self,request):

        api_key = request.data.get('api_key')
        '''view for the forecast, we get the api_key sent by the user and use it in links'''
        link1 = f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q=Hamburg&days=3&aqi=no&alerts=no"

        link2 = f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q=Gliwice&days=3&aqi=no&alerts=no"
        '''we get the data and return it to the frontend server, alongside the status code'''
        try:
            responseHamburg = requests.get(link1)
            responseHamburg.raise_for_status()
            responseGliwice = requests.get(link2)
            responseGliwice.raise_for_status()
            return Response({
                "hamburg": responseHamburg.json(),"gliwice": responseGliwice.json()}, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({"error": str(e)})
# Create your views here.

class ManageKey(APIView):
    def post(self,request):
        api_key = request.data.get('api_key')
        if api_key:
            Storage.objects.update_or_create(
               name="default",
                defaults={"api_key": api_key}
            )
            return Response({"message": "API key saved successfully"}, status=status.HTTP_200_OK)
        return Response({"error": "API key not provided"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request):
        try:
            key_obj = Storage.objects.get(name="default")
            return Response({"api_key": key_obj.api_key}, status=status.HTTP_200_OK)
        except Storage.DoesNotExist:
            return Response({"error": "API key not found"}, status=status.HTTP_404_NOT_FOUND)