"""views.py"""
from django.shortcuts import render

def about(request):
    """Renders the about page."""
    return render(request, 'about.html')

def book(request):
    """Renders the book page."""
    return render(request, 'book.html')

def community(request):
    """Renders the community page."""
    return render(request, 'community.html')

def gallery(request):
    """Renders the gallery page."""
    return render(request, 'gallery.html')

def index(request):
    """Renders the home page."""
    return render(request, 'index.html')

def member(request):
    """Renders the member page."""
    return render(request, 'member.html')
