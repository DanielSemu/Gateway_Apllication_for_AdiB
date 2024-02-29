from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Applications

class ApplicationSerializer(ModelSerializer):
    app_category = serializers.CharField(source='app_category.category', read_only=True)
    class Meta:
        model =Applications
        fields =['id','app_name','image','url','app_category','description']