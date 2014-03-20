App = Ember.Application.create();

App.Router.map(function() {
  this.resource('commits');
  this.resource('commit', { path: 'commit/:commit_sha' });
});

var commitsURL = 'https://api.github.com/repos/somlor/kanban/commits';

App.CommitsRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON(commitsURL);
  }
});

App.CommitRoute = Ember.Route.extend({
  model: function(params) {
    //debugger;
    return $.getJSON(commitsURL + '/' + params.commit_sha);
  },

  serialize: function(model) {
    //debugger;
    return { commit_sha: model.sha };
  }
});

