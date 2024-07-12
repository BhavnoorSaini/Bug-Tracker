from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Ticket


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ["id", "title", "content", "created_at", "author", "priority"]
        extra_kwargs = {"author": {"read_only": True}}