from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ApplicationSerializer
from .models import Applications
from rest_framework import status
# Create your views here.
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login






@api_view(["GET", "POST"])
def getApplications(request):
    if request.method =='GET':
        # return getNotes(request)
        notes =Applications.objects.all()
        serializer=ApplicationSerializer(notes, many=True)
        return Response(serializer.data)
    
@api_view(["GET", "POST"])
def LoginView(request):
    if request.method =='POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            print("Login succesful ")
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            print("Invalid Login ")
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

    