angular.module('starter.services', ['ngResource'])

    .service('Project', function ($resource, Actions) {
        return $resource('http://localhost:4001/projects', {id: '@id'}, Actions);
    })
    .service('PostMetas', function ($resource, Actions) {
        return $resource('/?json_route=/posts/:id/meta/:meta_id', {id: '@id', meta_id: '@meta_id'}, Actions);
    })



