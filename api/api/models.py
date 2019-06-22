from mongoengine import Document, EmbeddedDocument, fields


class Reply(EmbeddedDocument):
    username = fields.StringField()
    answer = fields.StringField()
    timestamp = fields.DateTimeField()
    upvotes = fields.IntField()
    downvotes = fields.IntField()


class Question(Document):
    question = fields.StringField()
    username = fields.StringField()
    timestamp = fields.DateTimeField()
    tags = fields.ListField(fields.StringField())
    client = fields.StringField()
    los = fields.StringField()
    comments = fields.EmbeddedDocumentListField(Reply)
    description = fields.StringField()


class User(Document):
    username = fields.StringField()
    firstname = fields.StringField()
    lastname = fields.StringField()
    email = fields.StringField()
    password = fields.StringField()
    slackid = fields.StringField()
    los = fields.StringField()
