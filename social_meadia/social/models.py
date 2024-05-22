from typing import Any
from django.db import models
from authentication.models import User
from authentication.models import BaseModel,BaseModelManager
# Create your models here

class Posts(BaseModel):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='posts')
    image = models.ImageField(upload_to='posts/')
    caption = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    objects = BaseModelManager()
    all_objects = models.Manager()
    
    def __str__(self):
        return self.user.username