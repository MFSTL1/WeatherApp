from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
import sys
import requests





class CurrentWeather(APIView):
    def post(self,request):
        apikey = request.data.get("api_key")
        type = request.data.get("type")

        link1 = f"http://api.weatherapi.com/v1/current.json?key={apikey}&q=Gliwice&aqi=no";

        link2 = f"http://api.weatherapi.com/v1/current.json?key={apikey}&q=Hamburg&aqi=no";
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
        apikey = request.data.get('api_key')
        link1 = f"http://api.weatherapi.com/v1/forecast.json?key={apikey}&q=Gliwice&days=7&aqi=no&alerts=no"

        link2 = f"http://api.weatherapi.com/v1/forecast.json?key={apikey}&q=Hamburg&days=7&aqi=no&alerts=no"
        try:
            responseHamburg = requests.get(link1)
            responseHamburg.raise_for_status()
            responseGliwice = requests.get(link2)
            responseGliwice.raise_for_status()
            return Response({
                "hamburg": responseHamburg.json(),    "gliwice": responseGliwice.json()}, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({"error": str(e)})
# Create your views here.
