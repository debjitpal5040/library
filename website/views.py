from django.shortcuts import render, redirect


def about(request):
    return render(request, 'about.html')

def admin(request):
    return render(request, 'admin.html')

def book(request):
    return render(request, 'book.html')

def community(request):
    return render(request, 'community.html')

def gallery(request):
    return render(request, 'gallery.html')

def index(request):
    return render(request, 'index.html')

def member(request):
    return render(request, 'member.html')