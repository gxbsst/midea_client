var host = "http://localhost:4001";

angular.module('starter.services', ['ngResource'])

    .service('Project', function ($resource, Actions) {
        return $resource(host + '/projects/:id', {id: '@id', page: "@page"}, Actions);
    })
    .service('Huihuo', function ($resource, Actions) {
        return $resource(host + '/projects/:projectId/huihuos', {projectId: '@projectId', page: "@page"}, Actions);
    })



