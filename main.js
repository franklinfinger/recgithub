


//little image of me
$(".header-right").find("img").attr("src",user.avatar_url);
// big image of me
$(".col-one").find(".me").attr("src",user.avatar_url);
// my name
$(".col-one").find(".name").text(user.name);
//login name
$(".col-one").find(".login").text(user.login);
//email
$(".col-one").find(".gmail").text(user.email);
//time joined
$(".col-one").find(".time").text(user.created_at);
//followers
$(".col-one").find("a.followers").attr("href",user.followers_url);
//starred
$(".col-one").find("a.starred").attr("href",user.starred_url);
//following
$(".col-one").find("a.following").attr("href",user.following_url);
//chscodecamp logo
$(".myOrgs").find(".chscodecamp").append('<img src="' + orgs[0].avatar_url + '" >');
//fef logo
$(".myOrgs").find(".fef").append('<img src="' + orgs[1].avatar_url + '" >');
//where-is-Doug logo
$(".myOrgs").find(".where-is-Doug").append('<img src="' + orgs[2].avatar_url + '" >');
//feo logo
$(".myOrgs").find(".feo").append('<img src="' + orgs[3].avatar_url + '" >');


var toggleNavTab = $(".tabNav-tab").find("a");
toggleNavTab.click(function(event){
  event.preventDefault();
  var selectedPage = "." + $(this).attr('rel');
  $(selectedPage).siblings('div').addClass('inactive');
  $(selectedPage).removeClass('inactive');
});

$(".repos-tab").find(".public").attr("src",repo._url);


var repoStr = "";
repos.forEach(function(el) {
  repoStr +=
  '<div class="repo-item">'
  + '<div class="repo-list-name">'
   + '<a class="recgithub" href="">'
   + el.name
   + '</a>'
  + '</div>'
  + '<div class="repo-stats">'
   + '<span class="octicon octicon-star">'
   + '</span>'
   + '<a class="stargazers" href="">'
   + el.stargazers_count
   + '</a>'
   + '<span class="octicon octicon-git-branch">'
   + '</span>'
   + '<a class="forks" href="">'
   + el.forks_count
   + '</a>'
  + '</div>'
  + '<div class="descriptUpdate">'
   + '<p class="description">'
   + el.description
   + '</p>'
   + '<p class="update">'
   + el.updated_at
   +'</p>'
  + '</div>'
+ '</div>'
});

$('.repo-list').append(repoStr);
