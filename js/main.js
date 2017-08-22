$(function() {

  // <<< ELEMENTS DECLARATION >>>
  let headerAndNavigation = $(".headerAndNavigation");
  let header = $(".header");
  let headerBox = $(".headerBox");
  let headerWrapper = $(".headerWrapper");
  let navigation = $(".navigation");
  let aboutAndSkills = $(".aboutAndSkills");
  let about = $(".about");
  let skills = $(".skills");
  let expAndPortfolio = $(".expAndPortfolio");
  let experience = $(".experience");
  let portfolio = $(".portfolio");
  let contact = $(".contact");
  // <<< ELEMENTS DECLARATION >>>

  // HIDES NAVIGATION AND SHOWS HEADER
  let showMore = () => {
    navigation.animate({
      width: "toggle"
    }, 300);
    spreadHeader();
    createReturnArrow();
    let returnArrow = $(".returnArrow");
    returnArrow.on("click", removeReturnArrow);
    headerBox.children().empty();
  }

  // SHOW ABOUT SECTION
  let showAbout = () => {
    showMore();

    header.append("<div class='aboutContainer'></div>");
    let aboutContainer = $(".aboutContainer");

    aboutContainer.append("<div class='aboutMe'></div>");
    let aboutMe = $(".aboutMe");

    aboutMe.append("<h2>Witam,</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero faucibus, mattis est et, aliquam dolor. Quisque varius purus nec ex volutpat viverra. Nulla sit amet diam vitae velit condimentum dapibus porta at arcu. Sed malesuada interdum turpis, in dictum ipsum luctus ut. Etiam in dui ultrices, accumsan metus quis, dapibus lorem. Fusce sit amet enim augue. Ut luctus ornare tincidunt. Duis pellentesque auctor neque nec convallis. Donec faucibus libero vitae ipsum mattis, id semper augue consectetur. Integer pulvinar elit at ligula vestibulum lacinia. Fusce interdum tempus purus ac eleifend. Sed vitae lacinia nunc, nec sodales metus. Maecenas sed ornare orci. Integer nec efficitur ante. Mauris neque elit, molestie sed interdum ut, facilisis eget quam.</p>");

    aboutContainer.css({
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    })
    .hide()
    .fadeIn(500);
  }
  // END SHOW ABOUT SECTION

  // SHOW SKILLS SECTION
  let showSkills = () => {
    showMore();

    header.append("<div class='skillsContainer'></div>");
    let skillsContainer = $(".skillsContainer");

    skillsContainer.append("<div class='usedTechs'></div>");
    let usedTechs = $(".usedTechs");

    usedTechs.append("<div class='html'><i class='devicon-html5-plain colored'></i></div><div class='css'><i class='devicon-css3-plain colored'></i></div><div class='javascript'><i class='devicon-javascript-plain colored'></i></div><div class='jquery'><i class='devicon-jquery-plain colored'></i></div><div class='sass'><i class='devicon-sass-original colored'></i></div><div class='gulp'><i class='devicon-gulp-plain colored'></i></div>");

    skillsContainer.append("<div class='basicTechs'></div>");
    let basicTechs = $(".basicTechs");
    basicTechs.append("<div class='react'><i class='devicon-react-original colored'></i></div><div class='bootstrap'><i class='devicon-bootstrap-plain colored'></i></div><div class='git'><i class='devicon-git-plain colored'></i></div>");

    usedTechs.before("<h2>W SWOICH PROJEKTACH UŻYWAM</h2>");
    basicTechs.before("<h2>W PODSTAWOWYM ZAKRESIE ZNAM</h2>");

    let html = $(".html");
    let css = $(".css");
    let javascript = $(".javascript");
    let jquery = $(".jquery");
    let sass = $(".sass");
    let gulp = $(".gulp");
    let react = $(".react");
    let bootstrap = $(".bootstrap");
    let git = $(".git");

    skillsContainer.css({
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    })
    .hide()
    .fadeIn(500);

    html.hover(() => {
      setTimeout(() => {
        html.find("i").removeClass(header.append("<div class='aboutContainer'></div>"));
    let aboutContainer = $(".aboutContainer");
      });
    }, () => {
      setTimeout(() => {
        html.find("i").removeClass("devicon-html5-plain-wordmark").addClass("devicon-html5-plain");
      });
    });

    css.hover(() => {
      setTimeout(() => {
        css.find("i").removeClass("devicon-css3-plain").addClass("devicon-css3-plain-wordmark");
      });
    }, () => {
      setTimeout(() => {
        css.find("i").removeClass("devicon-css3-plain-wordmark").addClass("devicon-css3-plain");
      });
    });

    jquery.hover(() => {
      setTimeout(() => {
        jquery.find("i").removeClass("devicon-jquery-plain").addClass("devicon-jquery-plain-wordmark");
      });
    }, () => {
      setTimeout(() => {
        jquery.find("i").removeClass("devicon-jquery-plain-wordmark").addClass("devicon-jquery-plain");
      });
    });

    react.hover(() => {
      setTimeout(() => {
        react.find("i").removeClass("devicon-react-original").addClass("devicon-react-original-wordmark");
      });
    }, () => {
      setTimeout(() => {
        react.find("i").removeClass("devicon-react-original-wordmark").addClass("devicon-react-original");
      });
    });

    bootstrap.hover(() => {
      setTimeout(() => {
        bootstrap.find("i").removeClass("devicon-bootstrap-plain").addClass("devicon-bootstrap-plain-wordmark");
      });
    }, () => {
      setTimeout(() => {
        bootstrap.find("i").removeClass("devicon-bootstrap-plain-wordmark").addClass("devicon-bootstrap-plain");
      });
    });

    git.hover(() => {
      setTimeout(() => {
        git.find("i").removeClass("devicon-git-plain").addClass("devicon-git-plain-wordmark");
      });
    }, () => {
      setTimeout(() => {
        git.find("i").removeClass("devicon-git-plain-wordmark").addClass("devicon-git-plain");
      });
    });
  }
  // END SHOW SKILLS SECTION

  // SHOW EXP SECTION
  let showExp = () => {
    showMore();

    header.append("<div class='expContainer'></div>");

    let expContainer = $(".expContainer");
    expContainer.append("<h2>Doświadczenie zawodowe</h2>")
    .append("<div class='timelineContainer'></div>");

    expContainer.css({
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    })
    .hide()
    .fadeIn(500);
  }
  // END SHOW EXP SECTION

  // SHOW PORTFOLIO SECTION
  let showPortfolio = () => {
    showMore();

    header.append("<div class='portfolioContainer'></div>");
    let portfolioContainer = $(".portfolioContainer");

    portfolioContainer.append("<h2>Dotychczas zrealizowane projekty</h2>")
    .append("<div class='projectsContainer'></div>");
    let projectsContainer = $(".projectsContainer");

    projectsContainer.append("<a class='coffeeMaker' href='#'><div></div></a><a class='frontendCV' href='#'><div></div></a><a class='project3' href='#'><div><p>Wkrótce... :)</p></div></a>");

    // let project3 = $(".project3");
    // project3.hover(() => {
    //   project3.append("<p>Wkrótce... :)</p>");
    // }, () => {
    //   $("p").remove();
    // });

    portfolioContainer.css({
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    })
    .hide()
    .fadeIn(500);
  }
  // END SHOW PORTFOLIO SECTION

  let showContact = () => {
    contact.empty();
    contact.css("background-image", "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../images/nav7.jpeg)");
    contact.hover(() => {
      $(this).css({
        transform: "scale(1)"
      });
    });
    contact.prepend(
      "<div class='contactReturnArrow'><i class='fa fa-arrow-circle-o-down' aria-hidden='true'></i></div>");
    aboutAndSkills.slideUp();
    expAndPortfolio.slideUp();
    contact.animate({
      height: "100%"
    }, 500, () => {
      let contactReturnArrow = $(".contactReturnArrow");
      contactReturnArrow.on("click", hideContact);
      contact.off("click");
    });
  }

  let hideContact = () => {
    contact.css("background-image", "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(../images/nav7.jpeg)");
    contact.hover(() => {
      $(this).css({
        transform: "scale(1.02)"
      });
    });
    let contactReturnArrow = $(".contactReturnArrow");
    contactReturnArrow.remove();
    aboutAndSkills.slideDown();
    expAndPortfolio.slideDown();
    contact.animate({
      height: "20%"
    }, 500, () => {
      contact.prepend("<div class='navigationLogo'><i class='fa fa-envelope-o' aria-hidden='true'></i></div><h2>KONTAKT</h2>");
      contact.on("click", showContact);
    });
  }

  // FUNCTION WHICH SPREADS HEADER TO 100% WIDTH
  let spreadHeader = () => {
    header.animate({
      width: "100%"
    }, 300);
    header.addClass("headerSpread");
  }
  // END SPREAD HEADER

  // CREATE RETURN ARROW ON ABOUT, SKILLS, EXP AND PORTFOLIO
  let createReturnArrow = () => {
    header.append(
      "<div class='returnArrow'><i class='fa fa-arrow-circle-o-left' aria-hidden='true'></i></div>");
  }
  // END CREATE RETURN ARROW

  // REMOVE RETURN ARROW ON ABOUT, SKILLS, EXP AND PORTFOLIO
  let removeReturnArrow = () => {
    $(".aboutContainer").remove();
    $(".skillsContainer").remove();
    $(".expContainer").remove();
    $(".portfolioContainer").remove();
    header.removeClass("headerSpread");
    setTimeout(function(){
      $(".returnArrow").remove();
    }, 5);
    headerWrapper.append(
      "<h1>MARCIN ŻYBURA</h1><h2>Junior Frontend Developer</h2>");
    header.animate({
      width: "50%"
    }, 500);
    navigation.animate({
      width: "toggle"
    }, 500);
  }
  // END REMOVE RETURN ARROW

  // CLEAR HEADER CONTENT
  let clearHeaderContent = () => {
    header.empty();
  }
  // END CLEAR HEADER CONTENT

  about.on("click", showAbout);
  skills.on("click", showSkills);
  experience.on("click", showExp);
  portfolio.on("click", showPortfolio);
  contact.on("click", showContact);
});
