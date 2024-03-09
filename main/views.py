from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from main.models import Contact
from django.contrib import messages

# Create your views here.

def index(request):
    active_page = 'home'
    return render(request, 'index.html', {'active_page': active_page})

def books(request):
    active_page = 'books'
    return render(request, 'books.html', {'active_page' : active_page})

# def course1(request):
#     active_page = 'courses'
#     return render(request, 'digital-computers-design-fundamentals.html', {'active_page': active_page})

def course2(request):
    active_page = 'courses'
    return render(request, 'assembly-language.html', {'active_page': active_page})

def course3(request):
    active_page = 'courses'
    return render(request, 'linear-algebra.html', {'active_page': active_page})

def course4(request):
    active_page = 'courses'
    return render(request, 'discrete-mathematics.html', {'active_page': active_page})

def course5(request):
    active_page = 'courses'
    return render(request, 'materials-semi-conductors-and-devices.html', {'active_page': active_page})

def course6(request):
    active_page = 'courses'
    return render(request, 'object-oriented-programming.html', {'active_page': active_page})

def resources(request):
    active_page = 'resources'
    return render(request, 'resources.html', {'active_page': active_page})

def contact(request):
    active_page = 'contact'
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')

        contact = Contact(name=name, email=email, phone=phone, desc = desc, date= datetime.today())
        contact.save()
        
        messages.success(request, "Your form has been submitted!")

    return render(request, 'contact.html', {'active_page': active_page})

