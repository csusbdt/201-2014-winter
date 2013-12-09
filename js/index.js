schedule = [
  ['L1', 20, 'The Linux Command Line',  new Date(2014,  1, 10)],
  ['L2', 30, 'Expressions',             new Date(2014,  1, 14)],
  ['A1', 50, 'Analyzing Code',          new Date(2014,  1, 19)],
  ['L3', 30, 'Another Lab',             new Date(2014,  1, 23)],
  ['L4', 30, 'Expressions Lab 2',       new Date(2014,  1, 28)],
  ['Q1', 50, 'Quiz 1',                  new Date(2014,  2,  3)],
];

(function() {
  window.app = { onload: function() {} };
  if (window.onload) {
    var originalOnload = window.onload;
    window.onload = function() {
      originalOnload();
      app.onload();
    };
  } else {
    window.onload = function() {
      app.onload();
    }
  }
})();

app.getUrlRequestParams = function() {
  var qs = document.location.search.split("+").join(" ");
  var params = {};
  var tokens;
  var re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

app.loadScript = function(url) {
  var s = document.getElementsByTagName('script')[0];
  var ss = document.createElement('script');
  ss.type = 'text/javascript';
  ss.async = true;
  ss.src = url;
  s.parentNode.insertBefore(ss,s);
};

app.onload = function() {
  app.buildPage();
  var id = app.getUrlRequestParams()['id'];
  if (id) {
    app.studentId = id;
    app.loadScript('/grades.js?x=' + Math.random());
  }
};

app.buildPage = function() {
  var tbody = document.getElementsByTagName('tbody')[0];
  for (var i = 0; i < schedule.length; ++i) {
    var tr = document.createElement('tr');
    var description = document.createElement('td');
    description.innerHTML = schedule[i][2];
    tr.appendChild(description);
    var deadline = document.createElement('td');
    deadline.innerHTML = app.extractDate(schedule[i][3]);
    tr.appendChild(deadline);
    points = document.createElement('td');
    points.innerHTML = schedule[i][1];
    tr.appendChild(points);
    tbody.appendChild(tr);
  }
};

app.insertGrades = function() {
  var tr = document.getElementsByTagName('thead')[0].children[0];
  var th = document.createElement('th');
  th.innerHTML = 'Score';
  tr.appendChild(th);
  var rows = document.getElementsByTagName('tbody')[0].children;
  for (var i = 0; i < rows.length; ++i) {
    var score = document.createElement('td');
    score.innerHTML = grades[app.studentId][i];
    rows[i].appendChild(score);
  }
};

app.extractDate = function(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()] + ' ' + date.getDate();
};

