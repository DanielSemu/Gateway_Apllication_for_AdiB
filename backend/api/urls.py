# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('applications/', views.getApplications , name="applications"),
]
