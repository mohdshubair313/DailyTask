from django.urls import path
from .views import get_tasks, create_tasks, delete_tasks

urlpatterns = [
    path('tasks/', get_tasks, name='get_tasks'),
    path('tasks/create/',create_tasks, name='create_tasks'),
    path('tasks/<int:pk>/', delete_tasks, name='delete_tasks'),
]