from django.contrib.auth.models import User,Group
import graphene
#import graphql_jwt
from .models import Comments,Photos,Profile,Profile_pic
#from graphene import ObjectType,Node,Schema,List,Field,relay,AbstractType
from graphene_django.fields import DjangoConnectionField
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.debug import DjangoDebug
from graphql_relay.node.node import from_global_id

class PhotoType(DjangoObjectType):
    class Meta:
        model = Photos
        interfaces = (graphene.Node, )


class CommentType(DjangoObjectType):
    class Meta:
        model = Comments
        interfaces = (graphene.Node, )

class UserType(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (graphene.Node, )

class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile
        interfaces = (graphene.Node, )

class ProfilePicType(DjangoObjectType):
    class Meta:
        model = Profile_pic
        interfaces = (graphene.Node, )

from django.contrib.auth import authenticate as auth,login,logout
class Authentication(graphene.Mutation):
    class Input:
        username = graphene.String()
        password = graphene.String()
    form_errors = graphene.String()
    user = graphene.Field(lambda:UserType)
    @classmethod
    def mutate(self,info,context,**kwargs):
        username=kwargs.get('username')
        password=kwargs.get('password')
        print(context.context.user)
        user = auth(username=username, password=password)
        print(user)
        if user is not None:
            login(context.context,user)
        print(context.context.user)
class PostComment(graphene.Mutation):
#    id = graphene.Int()
#    comment = graphene.String()
#    photoid = graphene.Int()
    class Input:
        comment = graphene.String()
        photoid = graphene.ID()
        uid = graphene.ID()
    form_errors = graphene.String()    
    comment = graphene.Field(lambda:CommentType)

    @classmethod
    #@staticmethod
#    def mutate(self, info,context, **kwargs):
    def mutate(self,info, context,**kwargs):
        #comments = Comments(comment=args.get('comment'),photo_id_id=args.get('photoid'),comment_by_id=1)
        #comments.save()
        cmt=kwargs.get('comment')
        pid=kwargs.get('photoid')
        uid=kwargs.get('uid')
        #print(pid)
        pk = from_global_id(kwargs.get('photoid'))[1]
        userid = from_global_id(kwargs.get('uid'))[1]

        comment = Comments.objects.create(comment=cmt,photo_id_id=pk,comment_by_id=userid)
        return PostComment(comment = comment, form_errors = None)

"""    @staticmethod
    def mutate(root,args,context,info):
        inputcomment = args.get('comment')
        #inputphotoid = args.get('photo_id')
        if not inputcomment:
            return PostComment(
                form_errors = json.dumps("error"))
        comment = Comments.objects.create(comment=inputcomment,photo_id_id=3,comment_by_id=1)
        return PostComment(comment = comments,form_error=None)"""
        #comment Comments()
        #args.get('comment')
        #args.get('photo_id')
        #print(args.get('comment'))


class Mutation(graphene.AbstractType):
    post_comment = PostComment.Field()
    authentication = Authentication.Field()
    
class Query(graphene.AbstractType):
    all_photos = graphene.List(PhotoType)
    photos = graphene.Field(PhotoType,id=graphene.Int())

    all_comments = graphene.List(CommentType)
    comments = graphene.Field(CommentType,id=graphene.Int(),comment = graphene.String())

    all_users = graphene.List(UserType)
    users = graphene.Field(UserType,username = graphene.String())

    current_user = graphene.Field(UserType)

    def resolve_current_user(self, info, **kwargs):
        if not info.context.user.is_authenticated():
            return None
        return info.context.user


    def resolve_all_photos(self, info, **kwargs):
        #print(info.context.user.id)
        return Photos.objects.all()

    def resolve_all_comments(self, info, **kwargs):
        return Comments.objects.select_related('photo_id').all()    

    def resolve_all_users(self, info, **kwargs):
        return Comments.objects.select_related('photo_id').all() 
        #return User.objects.all()


    def resolve_photos(self, info, **kwargs):
        #print("dskfjkl dlkf sd flkj")
        id = kwargs.get('id')
        name = kwargs.get('name')
        #print("dskfjkl dlkf sd flkj")
        #id = from_global_id(args.get('id'))[1]
        #print("jkhkjhjkljlkjl",id)
        if id is not None:
            return Photos.objects.get(pk=id)
        return None

#    def resolve_comments(self, args, context, info):
    def resolve_comments(self,info, context,**kwargs):
        #print("dskfjkl dlkf sd flkj")
        id = kwargs.get('id')
        comment = kwargs.get('name')

        if id is not None:
            return Comments.objects.get(pk=id)

        if comment is not None:
            return Comments.objects.get(comment=comment)
        return None

    def resolve_users(self, info, **kwargs):
        #id = kwargs.get('id')
        username = kwargs.get('username')
        #print(id,username)
        #if id is not None:
        #    return User.objects.get(pk=id)

        if username is not None:
            return User.objects.get(username=username)
        return None
