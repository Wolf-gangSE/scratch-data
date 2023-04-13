from flask import request
from flask_restful import Resource, reqparse

from api.controllers.StudioController import StudioController


class StudioResource(Resource):
    def __init__(self, supabase):
        self.supabase = supabase

    def get(self, id):
        offset = request.args.get('offset', default=0, type=int)
        return StudioController.fetch(id, self.supabase, id, offset)