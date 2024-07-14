from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Ticket


class UserSerializer(serializers.ModelSerializer):
    is_admin = serializers.BooleanField(write_only=True, default=False)

    class Meta:
        model = User
        fields = ["id", "username", "password", "is_admin"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        is_admin = validated_data.pop('is_admin', False)
        user = User.objects.create_user(**validated_data)
        if is_admin:
            user.is_staff = True
            user.is_superuser = True
            user.save()
        return user


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ["id", "title", "content", "created_at", "author", "priority"]
        extra_kwargs = {"author": {"read_only": True}}