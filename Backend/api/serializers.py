from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import News


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True),

    class Meta:
        model = get_user_model()
        fields = ['username', 'password', 'first_name', 'last_name', 'email']

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = '__all__'