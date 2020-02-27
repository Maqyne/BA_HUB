var PROVIDER = (function() {
    var _allUsers = {};
    var _allData = {};
    var _currentPage = '';


    var _getUsers = function(credCheck) {
        $.getJSON('data/users.json', function(users) {
          // this is when it is complete
          console.log('success ', users);
        })
          .fail(function(error) {
            //   console.log('Whoops ', error.status + ' ' + error.statusText);
          })
          .done(function(users) {
            _allUsers = users;
            credCheck();
          });
      };
  
    var _getData = function(callback) {
      $.getJSON('data/data.json', function(data) {
        // this is when it is complete
        // console.log('success ', data);
      })
        .fail(function(error) {
          //   console.log('Whoops ', error.status + ' ' + error.statusText);
        })
        .done(function(data) {
          _allData = data;
          callback();
          // populateNav(data.MainNav);
        });
    };

    
  
    var _getMainNav = function() {
      return _allData.MainNav;
    };
  
    var _getPageContent = function(nameOfPage) {
      var content = '';
      $.each(_allData.Pages, function(idx, page) {
        if (nameOfPage === page.pageName) {
          content = page.content;
          _currentPage = page.pageName;
        }
      });
      return content;
    };
  
    var _getCurrentPageName = function() {
      return _currentPage;
    };

    var _getLoginModal = function() {
        let loginModal =
          '<div class="login_wrapper"></div><h2>BA HUB LOGIN</h2><form id="form_id" method="post" name="myform"><label>User Name :</label><input type="text" name="username" id="username"/><label>Password :</label><input type="password" name="password" id="password"/><input type="button" value="Login" id="submit" onclick="validate()"/></form></div>';
    
        return loginModal;
      };
  
    return {
        getUsers: _getUsers,
        getData: _getData,
        getMainNav: _getMainNav,
        getPageContent: _getPageContent,
        getCurrentPageName: _getCurrentPageName,
        getLoginModal: _getLoginModal
    };
  })();