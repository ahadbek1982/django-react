from django.contrib import admin

from  todo.models import Users, Tasks

# class TodoAdmin(admin.ModelAdmin):
#     list_display = ('title', 'description', 'completed')


admin.site.register([Users, Tasks])
