from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager

# Create your models here.
class BaseModel(models.Model):
    is_deleted=models.BooleanField(default=False)
    
    class Meta:
        abstract=True
        
    def delete(self, *args, **kwargs):
        self.is_deleted=True
        self.save()
    
    def hard_delete(self, *args, **kwargs):
        super(BaseModel, self).delete(*args, **kwargs)
          
class BaseModelManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)
    
    def get_by_natural_key(self, username):
        return self.get(username=username)
    
# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, username=None, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, username=username, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, username=None, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         return self.create_user(email, username, password, **extra_fields)

#     def get_by_natural_key(self, username):
#         return self.get(username=username)
    
class User(AbstractUser):
    is_private=models.BooleanField(default=False)
    profile_image=models.ImageField(upload_to='profile/')
    # objects=CustomUserManager()
    # all_objects = models.Manager()
    
    # def natural_key(self):
    #     return (self.username,)