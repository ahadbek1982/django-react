from django.shortcuts import render

from rest_framework import viewsets
from todo.serializers import UserSerializer, TasksSerializer
from todo.models import  Users, Tasks



class TasksView(viewsets.ModelViewSet):
    serializer_class= TasksSerializer
    queryset = Tasks.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()
    
