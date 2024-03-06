from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class App_Category(models.Model):
    category=models.CharField(max_length=500)    
    def __str__(self):
        return self.category

class Applications(models.Model):
    app_name=models.CharField(max_length=200)
    image=models.ImageField(blank=True, null=True, upload_to="images/")
    url=models.CharField(max_length=500)
    app_category=models.ForeignKey(App_Category , on_delete=models.CASCADE)
    description=models.CharField(max_length=1000)

    def __str__(self):
        return self.app_name


