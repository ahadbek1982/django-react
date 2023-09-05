from django.shortcuts import render

from rest_framework import viewsets
from todo.serializers import UserSerializer, TasksSerializer, ListTasksSerializer, ListOtdelsSerializer
from todo.models import Users, Tasks, ListTasks, ListOtdels


class ListOtdelsView(viewsets.ModelViewSet):
    serializer_class = ListOtdelsSerializer
    queryset = ListOtdels.objects.all()


class ListTasksView(viewsets.ModelViewSet):
    serializer_class = ListTasksSerializer
    queryset = ListTasks.objects.all()


class TasksView(viewsets.ModelViewSet):
    serializer_class = TasksSerializer
    queryset = Tasks.objects.all()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()
