# Generated by Django 4.1.10 on 2023-09-05 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0009_alter_tasks_javobgar'),
    ]

    operations = [
        migrations.CreateModel(
            name='ListTasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_name', models.CharField(max_length=120)),
            ],
        ),
    ]