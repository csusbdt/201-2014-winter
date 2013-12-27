(function() {

  schedule = [
    ['L1',  20, new Date(2014,  1, 10), '<a href="L1.html">L1: Command Line</a>'],
    ['L2',  30, new Date(2014,  1, 14), '<a href="L2.html">L2: Expressions</a>'],
    ['A1',  50, new Date(2014,  1, 19), '<a href="A1.pdf">A1: Analyzing Code</a>'],
    ['Q1', 200, new Date(2014,  1, 23), 'Quiz 1'],
    ['L3',  40, new Date(2014,  1, 28), '<a href="L3.html">L3: Algorithms</a>'],
    ['L4',  30, new Date(2014,  2,  3), '<a href="L4.html">L4: Functions</a>'],
    ['L5',  20, new Date(2014,  2,  3), '<a href="L5.html">L5: Classes</a>'],
    ['A2',  55, new Date(2014,  1, 19), '<a href="A2.pdf">A2: Classes</a>'],
    ['Q2', 200, new Date(2014,  1, 23), 'Quiz 2'],
    ['L6',  30, new Date(2014,  2,  3), '<a href="L6.html">L6: Arrays</a>'],
    ['L7',  20, new Date(2014,  2,  3), '<a href="L7.html">L7: Binary Search</a>'],
    ['A3',  50, new Date(2014,  1, 19), '<a href="A3.pdf">A3: Algorithms 2</a>'],
    ['Q3', 200, new Date(2014,  1, 23), 'Quiz 3'],
    ['L8',  30, new Date(2014,  2,  3), '<a href="L8.html">L8: Sorting</a>'],
    ['F' , 400, new Date(2014,  1, 23), 'Final Exam']
  ];

  app.onload = function() {
    app.buildTable();
    app.loadScript('scores.js?x=' + Math.random());
  };

  app.buildTable = function() {
    var tbody = document.getElementsByTagName('tbody')[0];
    for (var i = 0; i < schedule.length; ++i) {
      var tr = document.createElement('tr');
      var td = document.createElement('td'); // activity column
      td.innerHTML = schedule[i][3];
      td.className = 'activity';
      tr.appendChild(td);
      td = document.createElement('td'); // deadline column
      td.innerHTML = app.extractDate(schedule[i][2]);
      td.className = 'deadline';
      tr.appendChild(td);
      td = document.createElement('td'); // points column
      td.innerHTML = schedule[i][1];
      td.className = 'points';
      tr.appendChild(td);
      td = document.createElement('td'); // score column
      td.innerHTML = '';
      td.className = 'score';
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  };

  app.setStudentId = function(id) {
    localStorage.setItem('studentId', id);
    document.getElementById('score-column').innerHTML = id;
    // Insert scores in table.
    var rows = document.getElementsByTagName('tbody')[0].children;
    for (var i = 0; i < rows.length; ++i) {
      if (app.scores[id][i] !== null) {
        rows[i].lastChild.innerHTML = app.scores[id][i];
      } else {
        rows[i].lastChild.innerHTML = '';
      }
    }
  }

  app.onloadScores = function() {
    app.computeAverage();
    var id = localStorage.getItem('studentId');
    if (id === null) id = 'Avg';
    app.setStudentId(id);
  };

  app.computeAverage = function() {
    var students = Object.keys(app.scores);
    var avgs = [];
    for (var j = 0; j < app.scores[students[0]].length; ++j) {
      var total = 0;
      var n = 0;
      for (var i = 0; i < students.length; ++i) {
        var id = students[i];
        var score = app.scores[id][j];
        if (score !== null) {
          total += score;
          ++n;
        }
      }
      if (n > 0) avgs.push(total/n);
      else avgs.push(null);
    }  
    app.scores.Avg = avgs;
  };

})();

