# Generated by Django 4.1.10 on 2023-08-31 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0008_alter_tasks_topshiriq_mavzu_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='javobgar',
            field=models.CharField(max_length=50),
        ),
    ]