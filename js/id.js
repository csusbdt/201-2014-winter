(function() {

  var currentStudentId = null;

  app.onload = function() {
    app.loadScript('scores.js?x=' + Math.random());
    currentStudentId = localStorage.getItem('studentId');
  };

  function onclick(e) {
    if (currentStudentId) {
      document.getElementById('currentStudentId').removeAttribute('id');
    }
    currentStudentId = e.target.innerHTML;
    localStorage.setItem('studentId', currentStudentId);
    e.target.setAttribute('id', 'currentStudentId');
  }

  app.onloadScores = function() {
    var ul = document.getElementById('ids');
    var ids = Object.keys(app.scores).sort();
    ids.unshift('AVG');
    for (var i = 0; i < ids.length; ++i) {
      var studentId = ids[i];
      var li = document.createElement('li');
      li.innerHTML = studentId;
      li.onclick = onclick;
      if (studentId === currentStudentId) {
        li.setAttribute('id', 'currentStudentId');
      }
      ul.appendChild(li);
    }
  };

})();
