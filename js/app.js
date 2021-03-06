angular
.module("portfolio", [
"ui.router"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("WelcomeController",[ //$state
  "$state",
 "$stateParams",
  WelcomeController
])
.controller("ProjectShowController",[
  "$state",
  "$stateParams",
  ProjectShowController
])
.controller("ContactShowController",[
  "$state",
  "$stateParams",
  ContactShowController
])
.controller("AboutShowController",[
  "$state",
  "$stateParams",
  AboutShowController
])
.controller("ResumeShowController",[
  "$state",
  "$stateParams",
  ResumeShowController
])

//Routes
function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome",{
    url:"",
    templateUrl: "js/ng-views/welcome.html",
    controller: "WelcomeController",
    controllerAs: "vm"
  })
  .state("projects", {
    url:"/projects",
    templateUrl: "js/ng-views/projects/show.html",
    controller: "ProjectShowController",
    controllerAs: "vm"
  })
  .state("contacts", {
    url:"/contacts",
    templateUrl: "js/ng-views/contacts/show.html",
    controller: "ContactShowController",
    controllerAs: "vm"
  })
  .state("about", {
    url:"/about",
    templateUrl: "js/ng-views/about/show.html",
    controller: "AboutShowController",
    controllerAs: "vm"
  })
  .state("resume", {
    url:"/resume",
    templateUrl: "js/ng-views/resume/show.html",
    controller: "ResumeShowController",
    controllerAs: "vm"
  })
}


function WelcomeController($state, $stateParams){

}

function ProjectShowController($state, $stateParams){
  // this.projects = [
  //   {
  //     title: "Project 1",
  //     githubLink: "http://url"
  //     projectIcon: "imgurl",
  //     desc: "Game of Hangman"
  //     imgurl: url("")
  //   }
  // ]
}

function ResumeShowController($state, $stateParams){

}

function ContactShowController($state, $stateParams){
 //  this.contacts = [
 //    {
 //    phone: "540-907-9484",
 //    email: "Travisbatts6@gmail.com",
 //    website: ""
 //  }
 // ]
}
function AboutShowController($state, $stateParams){
  
}
