var headerRender = function(){
  var header = document.getElementById('header')
  var siteTitle = document.createElement('a')
  var navBar = document.createElement('ul')


  siteTitle.innerHTML = "Acumen Syndicate"

  header.appendChild(siteTitle)
  header.appendChild(navBar)

  siteTitle = document.getElementById("header").getElementsByTagName("a")[0]
  navBar = document.getElementById("header").getElementsByTagName("ul")[0]



  var navList = [
    {name: 'Home',
                    a:'/',
                    el: document.createElement('li'), elA: document.createElement('a')},
    {name: 'Projects',
                    a:'/extra',
                    el: document.createElement('li'), elA: document.createElement('a')},
    {name: 'Update',
                    a:'/version',
                    el: document.createElement('li'), elA: document.createElement('a')},
    {name: 'Github',
                    a:'https://github.com/Acumen-syndicate-Ltd',
                    el: document.createElement('li'), elA: document.createElement('a')},
    {name: 'About',
                    a:'/about',
                    el: document.createElement('li'), elA: document.createElement('a')},
    {name: 'Contact',
                    a:'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=acumenofknowledge@gmail.com&tf=1',
                    el: document.createElement('li'), elA: document.createElement('a')}
  ]





  for (let navListItem of navList) {
    navBar.appendChild(navListItem.el);
  }

  for (i=0; i < navList.length; i++) {
    let navListA = navList[i].a
    let navListItem = navBar.getElementsByTagName('li')[i]
    navListItem.appendChild(document.createElement('a'))
    let navListItemA = navListItem.getElementsByTagName('a')[0]
    let navListItemID = "nav-" + navList[i].name
    navListItemA.setAttribute('id', (navListItemID))
    navListItemA.setAttribute("href", navList[i].a)
    document.getElementById(navListItemID).innerHTML = navList[i].name
  }




  siteTitle.setAttribute("id", "site-title")
  siteTitle.setAttribute("href", "/")
  navBar.setAttribute("id", "nav-bar")

}

headerRender()
