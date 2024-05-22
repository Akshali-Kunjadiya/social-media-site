from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Posts
from authentication.models import User
from .serializers import PostsSerializer,UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class=PostsSerializer
    queryset=Posts.objects.all()
    
class UserViewSet(viewsets.ModelViewSet):
    serializer_class=UserSerializer
    queryset=User.objects.all()
    
    