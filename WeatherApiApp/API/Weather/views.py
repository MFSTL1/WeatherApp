from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
import sys
import requests




def Realtime(request,format=None):
    if(request.method == 'GET'):
        apikey  = request.getdata("api_key")


        return Response()
class ApiManager(APIView):

    def GetKey(request,format=None):
        return Response()

def Forecast(request, format=None):
    return Response()
# Create your views here.
