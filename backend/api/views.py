from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ApplicationSerializer
from .models import Applications
from rest_framework import status
# Create your views here.

@api_view(["GET", "POST"])
def getApplications(request):
    if request.method =='GET':
        # return getNotes(request)
        notes =Applications.objects.all()
        serializer=ApplicationSerializer(notes, many=True)
        return Response(serializer.data)
    