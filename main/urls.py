from django.contrib import admin
from django.urls import path
from main import views

urlpatterns = [
    path('', views.index, name=''),
    path('home', views.index, name=''),
    path('books', views.books, name='books'),
    path('assembly-language', views.course2, name='assembly-language'),
    path('linear-algebra', views.course3, name='linear-algebra'),
    path('discrete-mathematics', views.course4, name='discrete-mathematics'),
    path('materials-semi-conductors-and-devices', views.course5, name='materials-semi-conductors-and-devices'),
    path('object-oriented-programming', views.course6, name='object-oriented-programming'),
    path('resources', views.resources, name='resources'),
    path('contact', views.contact, name='contact')
]
