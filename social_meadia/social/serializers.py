from rest_framework import serializers
from .models import Posts
from authentication.models import User

class UserSerializer(serializers.ModelSerializer):
    profile_image_url = serializers.SerializerMethodField()
    class Meta:
        model=User
        fields=['id', 'password', 'last_login','is_superuser','username','is_private', 'profile_image_url']
        
    def get_profile_image_url(self, obj):
        request = self.context.get('request')
        if obj.profile_image and request:
            return request.build_absolute_uri(obj.profile_image.url)
        return None
        
class PostsSerializer(serializers.ModelSerializer):
    user=serializers.SerializerMethodField(read_only=True)
    image_url = serializers.SerializerMethodField()
    class Meta:
        model=Posts
        fields=['id','is_deleted','caption','created_at','created_at','user','image_url']
        
    def get_user(self, obj):
        request = self.context.get('request')
        serializer = UserSerializer(obj.user, context={'request': request})
        return serializer.data

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None