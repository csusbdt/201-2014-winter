(function() {

  schedule = [
    ['L1',  20, new Date(2014,  1, 10), '<a href="L1.html">L1: Command Line</a>'],
    ['L2',  30, new Date(2014,  1, 14), '<a href="labs/expressions.html">L2: Expressions</a>'],
    ['A1',  50, new Date(2014,  1, 19), '<a href="assignments/analyze.html">A1: Analyzing Code</a>'],
    ['Q1', 200, new Date(2014,  1, 23), 'Quiz 1'],
    ['L3',  40, new Date(2014,  1, 28), '<a href="labs/algorithms.html">L3: Algorithms</a>'],
    ['L4',  30, new Date(2014,  2,  3), '<a href="labs/functions.html">L4: Functions</a>'],
    ['L5',  20, new Date(2014,  2,  3), '<a href="labs/classes.html">L5: Classes</a>'],
    ['A2',  50, new Date(2014,  1, 19), '<a href="assignments/classes.html">A2: Classes</a>'],
    ['Q2', 200, new Date(2014,  1, 23), 'Quiz 2'],
    ['L6',  20, new Date(2014,  2,  3), '<a href="labs/arrays.html">L6: Arrays</a>'],
    ['A3',  50, new Date(2014,  1, 19), '<a href="assignments/linear.html">A3: Linear Algorithms</a>'],
    ['L7',  20, new Date(2014,  2,  3), '<a href="labs/search.html">L7: Binary Search</a>'],
    ['A4',  40, new Date(2014,  1, 19), '<a href="assignments/linear2.html">A4: More Linear Algorithms</a>'],
    ['Q3', 200, new Date(2014,  1, 23), 'Quiz 3'],
    ['L8',  20, new Date(2014,  2,  3), '<a href="labs/sorting.html">L7: Sorting</a>'],
    ['F' , 400, new Date(2014,  1, 23), 'Final Exam']
  ];

  var currentStudentId = null;

  app.onload = function() {
    app.buildTable();
    currentStudentId = localStorage.getItem('currentStudentId');
    if (currentStudentId) {
      app.loadScript('grades.js?x=' + Math.random());
    }
  };

  app.buildTable = function() {
    var tbody = document.getElementsByTagName('tbody')[0];
    for (var i = 0; i < schedule.length; ++i) {
      var tr = document.createElement('tr');
      var td = document.createElement('td'); // activity column
      td.innerHTML = schedule[i][3];
      tr.appendChild(td);
      td = document.createElement('td'); // deadline
      td.innerHTML = app.extractDate(schedule[i][2]);
      tr.appendChild(td);
      td = document.createElement('td'); // points
      td.innerHTML = schedule[i][1];
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  };

  app.onloadGrades = function() {
    var tr = document.getElementsByTagName('thead')[0].children[0];
    var th = document.createElement('th');
    th.innerHTML = 'Score';
    tr.appendChild(th);
    var rows = document.getElementsByTagName('tbody')[0].children;
    for (var i = 0; i < rows.length; ++i) {
      var score = document.createElement('td');
      score.innerHTML = grades[currentStudentId][i];
      rows[i].appendChild(score);
    }
  };

})();

