from django.urls import path
from . import views

urlpatterns = [
    path("bugs/", views.BugListCreate.as_view(), name="bug-list"),
    path("bugs/delete/<int:pk>/", views.BugDelete.as_view(), name="delete-bug"),
]