from rest_framework import serializers
from todo.models import Users, Tasks, ListTasks, ListOtdels


class ListOtdelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListOtdels
        fields = "__all__"


class ListTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListTasks
        fields = "__all__"


class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ('id', 'sana', 'javobgar', 'topshiriq_turi', 'topshiriq_nomer',
                  'topshiriq_sana', 'topshiriq_otdel', 'topshiriq_mavzu', 'topshiriq_muddat')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'username', 'email', 'password', 'newpassword')
