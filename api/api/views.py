from django.http import JsonResponse
from api.models import Question, Reply


def serializeQuestions(questions):
    """
    Convert a mongo query set to a list of dict objects that can be returned
    as a JsonResponse

    Input: questions -> Question queryset

    Returns: list(dict(Question))
    """
    return [{"id": q.id, "question": q.question, "username": q.username,
             "timestamp": q.timestamp, "tags": q.tags, "client": q.client,
             "los": q.los} for q in questions]


def loadRecent(request):
    """
    The "Main Page" of Bench Overflow, showing 10 recent questions that have
    been asked

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    questions = serializeQuestions(questions=Question.objects.all()[:10])
    return JsonResponse(data=questions, safe=False)


def loadAll(request):
    """
    A way to return all questions in the database to be filtered on the
    frontend

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    questions = serializeQuestions(questions=Question.objects.all())
    return JsonResponse(data=questions, safe=False)
