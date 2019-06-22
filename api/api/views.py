from django.http import JsonResponse
from api.models import Question, Reply, User
from django.views.decorators.csrf import csrf_exempt
from urllib.parse import unquote
from json import loads
from django.utils.timezone import now
from bson.objectid import ObjectId


def serializeQuestions(questions):
    """
    Convert a mongo query set to a list of dict objects that can be returned
    as a JsonResponse

    Input: questions -> Question queryset

    Returns: list(dict(Question))
    """
    return [{"id": str(q.id), "question": q.question, "username": q.username,
             "timestamp": q.timestamp, "tags": q.tags, "client": q.client,
             "los": q.los} for q in questions]


def parseBody(body):
    """
    Parse the body of a request to find the key-val pairs sent through

    Input: request -> WSGIRequest

    Returns: dict
    """
    return {key: val for key, val in
            [pair.split("=", 1) for pair in
             unquote(body.decode("utf-8")).split("&")]}


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


@csrf_exempt
def loadQuestion(request):
    """
    Takes in a Question id and returns the information about that Question
    object in JSON form

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    body = parseBody(body=request.body)
    q = Question.objects(id=body["id"]).first()
    data = {"id": str(q.id), "question": q.question, "username": q.username,
            "timestamp": q.timestamp, "tags": q.tags, "client": q.client,
            "los": q.los, "description": q.description,
            "comments": [
                {"id": str(r._id), "username": r.username, "answer": r.answer,
                 "timestamp": r.timestamp, "upvotes": r.upvotes,
                 "downvotes": r.downvotes}
                for r in q.comments]}
    return JsonResponse(data=data, status=204)


@csrf_exempt
def loadUser(request):
    """
    Takes in a username and returns the information about that User
    object in JSON form

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    body = parseBody(body=request.body)
    u = User.objects(username=body["username"]).first()
    data = {"id": str(u.id), "username": u.username, "firstname": u.firstname,
            "lastname": u.lastname, "email": u.email, "password": u.password,
            "slackid": u.slackid, "los": u.los}
    return JsonResponse(data=data, status=204)


@csrf_exempt
def saveQuestion(request):
    """
    Take contents of a request body and save values to MongoDB as a new
    Question object

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    body = parseBody(body=request.body)
    question = Question()
    question.question = body["question"]
    question.username = body["username"]
    question.timestamp = now
    question.tags = loads(body["tags"])
    question.client = body["client"]
    question.los = body["los"]
    question.description = body["description"]
    question.save()
    return JsonResponse({"Result": "Success"}, status=204)


@csrf_exempt
def saveUser(request):
    """
    Take contents of a request body and save values to MongoDB as a new
    User object

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    body = parseBody(body=request.body)
    user = User()
    user.username = body["username"]
    user.firstname = body["firstname"]
    user.lastname = body["lastname"]
    user.email = body["email"]
    user.password = body["password"]
    user.slackid = body["slackid"]
    user.los = body["los"]
    user.save()
    return JsonResponse({"Result": "Success"}, status=204)


@csrf_exempt
def saveReply(request):
    """
    Take contents of a request body and save values to MongoDB Question
    Object's "comments" section

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    body = parseBody(body=request.body)
    reply = Reply()
    reply.username = body["username"]
    reply.answer = body["answer"]
    reply.timestamp = now
    reply.upvotes = 0
    reply.downvotes = 0
    question = Question.objects(id=body["questionid"]).first()
    question.comments.append(reply)
    question.save()
    return JsonResponse({"Result": "Success"}, status=204)


@csrf_exempt
def updateReply(request):
    """
    Take contents of a request body and updates values to MongoDB Question
    Object's "comments" section

    Input: request -> WSGIRequest

    Returns: JsonResponse
    """
    body = parseBody(body=request.body)
    question = Question.objects(id=body["questionid"]).first()
    for reply in question.comments:
        if(body["replyid"] == str(reply._id)):
            if(body["answer"]):
                reply.answer = body["answer"]
            if(body["upvotes"]):
                reply.upvotes += 1
            if(body["downvotes"]):
                reply.downvotes -= 1
    question.save()
    return JsonResponse({"Result": "Success"}, status=204)
