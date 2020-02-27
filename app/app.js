function initNav() {
    $("a").click(function(e) {
      var cp = PROVIDER.getCurrentPageName();
      GEN_UTILITY.trace("initNav ", cp);
      var btnID = e.currentTarget.id;
      if (cp != btnID) {
        loadContent(btnID);
      }
    });
  }
  
  function loadContent(pageName) {
    var pageContent = PROVIDER.getPageContent(pageName);
    GEN_UTILITY.trace("app.js line 14", pageContent);
    $(".content").html(pageContent);
  
    initNav();
  }

  function loginModal(){
      $(".alert-box").html(PROVIDER.getLoginModal());
      $(".modal").css("display", "flex");
  }
  
  function populateNav() {
    var nav = PROVIDER.getMainNav();
  
    $.each(nav, function(idx, link) {
      // $('nav').append('<a href="' + link.path + '">' + link.linkName + '</a>');
      $("nav").append(`<a id="${link.path}" href="#">${link.linkName}</a>`);
    });
    loginModal();
    loadContent("home");
  }
  
  function dataIsLoaded() {
    populateNav();
    
  }
  
  $(document).ready(function() {
    PROVIDER.getUsers()
    PROVIDER.getData(dataIsLoaded);
  });