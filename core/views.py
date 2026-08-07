from django.shortcuts import render

from .story.chapters import CHAPTERS


def home(request):

    context = {
        "chapters": CHAPTERS,
    }

    return render(
        request,
        "pages/home.html",
        context,
    )