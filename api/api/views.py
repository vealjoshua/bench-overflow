from django.http import JsonResponse, HttpResponse
from api.models import Question, Reply


def loadRecent(request):
    questions = [
        {"question": q.question, "username": q.username,
         "timestamp": q.timestamp, "tags": q.tags, "client": q.client,
         "los": q.los, "description": q.description,
         "comments": [
             {"username": r.username, "answer": r.answer,
              "timestamp": r.timestamp, "upvotes": r.upvotes,
              "downvotes": r.downvotes}
             for r in q.comments
         ]}
        for q in Question.objects.all()[:10]]
    return JsonResponse(data=questions, safe=False)
