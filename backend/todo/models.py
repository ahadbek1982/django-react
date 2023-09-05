from django.db import models


class ListOtdels(models.Model):
    otdel_name = models.CharField(max_length=200)

    def __str__(self):
        return self.otdel_name


class ListTasks(models.Model):
    task_name = models.CharField(max_length=120)

    def __str__(self):
        return self.task_name


class Users(models.Model):
    username = models.CharField(unique=True, max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=120)
    newpassword = models.CharField(max_length=120)

    def __str__(self):
        return self.username


class Tasks(models.Model):
    sana = models.DateField()
    javobgar = models.CharField(max_length=50)
    topshiriq_turi = models.CharField(max_length=50)
    topshiriq_nomer = models.CharField(max_length=50)
    topshiriq_sana = models.DateField()
    topshiriq_otdel = models.CharField(max_length=250)
    topshiriq_mavzu = models.CharField(max_length=250)
    topshiriq_muddat = models.DateField()

    def __str__(self):
        return self.topshiriq_nomer

    class Meta:
        ordering = ['sana']
