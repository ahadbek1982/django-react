# Generated by Django 4.1.10 on 2023-08-31 08:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0006_alter_users_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sana', models.DateField()),
                ('topshiriq_turi', models.CharField(max_length=30)),
                ('topshiriq_nomer', models.CharField(max_length=30)),
                ('topshiriq_sana', models.DateField()),
                ('topshiriq_otdel', models.CharField(max_length=50)),
                ('topshiriq_mavzu', models.CharField(max_length=50)),
                ('topshiriq_muddat', models.DateField()),
                ('javobgar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo.users')),
            ],
            options={
                'ordering': ['sana'],
            },
        ),
        migrations.DeleteModel(
            name='Todo',
        ),
    ]