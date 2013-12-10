(function() {

  var currentStudentId = null;

  app.onload = function() {
    app.loadScript('grades.js?x=' + Math.random());
    currentStudentId = localStorage.getItem('currentStudentId');
  };

  function onclick(e) {
    if (currentStudentId) {
      document.getElementById('currentStudentId').removeAttribute('id');
    }
    currentStudentId = e.target.innerHTML;
    localStorage.setItem('currentStudentId', currentStudentId);
    e.target.setAttribute('id', 'currentStudentId');
  }

  app.onloadGrades = function() {
    var ul = document.getElementById('ids');
    var ids = Object.keys(grades).sort();
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

  app.onClear = function() {
    if (currentStudentId) {
      localStorage.removeItem('currentStudentId');
      document.getElementById('currentStudentId').removeAttribute('id');
      currentStudentId = null;
    }
  }

})();
