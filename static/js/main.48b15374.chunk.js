(this["webpackJsonpredux-app"]=this["webpackJsonpredux-app"]||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),o=a(9),r=a.n(o),c=a(3),u=a(16),l=(a(27),a(4)),h=a(5),d=a(8),v=a(7),m=[{Title:"The Avengers",Year:"2012",Rate:"PG-13",Released:"04 May 2012",Runtime:"143 min",Genre:"Action, Adventure, Sci-Fi",Director:"Joss Whedon",Writer:"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",Actors:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",Plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",Language:"English, Russian, Hindi",Country:"USA",Awards:"Nominated for 1 Oscar. Another 38 wins & 79 nominations",Poster:"https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.0/10"},{Source:"Rotten Tomatoes",Value:"91%"},{Source:"Metacritic",value:"69/100"}],Metascore:"69",imdbRating:"8.0",imdbVotes:"1,216,895",imdbID:"tt0848228",Type:"movie",DVD:"25 Sep 2017",BoxOffice:"$623,279,547",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"The Dark Knight",Year:"2008",Rate:"PG-13",Released:"08 May 2008",Runtime:"152 min",Genre:"Action, Crime, Thriller",Director:"Christopher Nolan",Writer:"Jonathan Nolan (screenplay), christopher Nolan (screenplay), christopher Nolan (story)",Actors:"Christian Bale, Health Ledge, Aaron Eckhart, Michael Caine",Plot:"At the end of The Dark Knight Rises, with the help of Gotham City's remaining police force, Batman was able to get control of the city back from Bane and finally defeated .",Language:"English, Russian, Hindi",Country:"USA",Awards:"Nominated for 1 Oscar. Another 38 wins & 79 nominations",Poster:"https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",Ratings:[{Source:"Internet Movie Database",Value:"9.0/10"},{Source:"Rotten Tomatoes",Value:"95%"},{Source:"Metacritic",value:"67/100"}],Metascore:"69",imdbRating:"9.0",imdbVotes:"1,216,895",imdbID:"tt0848228",Type:"movie",DVD:"25 Sep 2008",BoxOffice:"$623,279,547",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"Gravity",Year:"2013",Rate:"PG-13",Released:"04 May 2012",Runtime:"143 min",Genre:"Action, Adventure, Sci-Fi",Director:"Joss Whedon",Writer:"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",Actors:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",Plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",Language:"English, Russian, Hindi",Country:"USA",Awards:"Nominated for 1 Oscar. Another 38 wins & 79 nominations",Poster:"https://i.pinimg.com/originals/30/a2/9b/30a29b320fe21710496e3028f432d75b.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.0/10"},{Source:"Rotten Tomatoes",Value:"91%"},{Source:"Metacritic",value:"69/100"}],Metascore:"69",imdbRating:"7.0",imdbVotes:"1,216,895",imdbID:"tt0848228",Type:"movie",DVD:"25 Sep 2017",BoxOffice:"$623,279,547",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"Iron Man",Year:"2008",Rate:"PG-13",Released:"05 June 2008",Runtime:"143 min",Genre:"Action, Adventure, Sci-Fi",Director:"Joss Whedon",Writer:"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",Actors:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",Plot:"A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon.",Language:"English, Russian, Hindi",Country:"USA",Awards:"Nominated for 1 Oscar. Another 38 wins & 79 nominations",Poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.9/10"},{Source:"Rotten Tomatoes",Value:"91%"},{Source:"Metacritic",value:"69/100"}],Metascore:"69",imdbRating:"7.9",imdbVotes:"1,216,895",imdbID:"tt0848228",Type:"movie",DVD:"25 Sep 2017",BoxOffice:"$623,279,547",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"}],b="ADD_MOVIES",p="ADD_TO_FAVOURITES",j="REMOVE_FROM_FAVOURITES",f="SET_SHOW_FAVOURITES",O="ADD_MOVIE_TO_LIST",g="ADD_SEARCH_RESULT";function y(e){return{type:p,movie:e}}function R(e){return{type:j,movie:e}}function T(e){return{type:f,val:e}}function A(e){var t="http://www.omdbapi.com/?apikey=3ca5df7&t=".concat(e);return function(e){fetch(t).then((function(e){return e.json()})).then((function(t){console.log("movie",t),e(function(e){return{type:g,movie:e}}(t))}))}}var S=a(1),x=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleAddToMovies=function(e){n.props.dispatch(function(e){return{type:O,movie:e}}(e))},n.handleSearchClick=function(){var e=n.state.searchText;n.props.dispatch(A(e))},n.handleSearchChange=function(e){n.setState({searchText:e.target.value})},n.state={searchText:""},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.search,a=t.result,n=t.showSearchResults;return Object(S.jsx)("div",{className:"nav",children:Object(S.jsxs)("div",{className:"search-container",children:[Object(S.jsx)("input",{onChange:this.handleSearchChange}),Object(S.jsx)("button",{id:"search-btn",onClick:this.handleSearchClick,children:"Search"}),n&&Object(S.jsx)("div",{className:"search-results",children:Object(S.jsxs)("div",{className:"search-result",children:[Object(S.jsx)("img",{src:a.Poster,alt:"search-pic"}),Object(S.jsxs)("div",{className:"movie-info",children:[Object(S.jsx)("span",{children:a.Title}),Object(S.jsx)("button",{onClick:function(){return e.handleAddToMovies(a)},children:"Add to movies"})]})]})})]})})}}]),a}(i.a.Component);var D=Object(s.b)((function(e){return{search:e.search}}))(x),C=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).handleFavouriteClick=function(){var t=e.props.movie;e.props.dispatch(y(t))},e.handleUnFavouriteClick=function(){var t=e.props.movie;e.props.dispatch(R(t))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movie,a=e.isFavourite;return Object(S.jsxs)("div",{className:"movie-card",children:[Object(S.jsx)("div",{className:"left",children:Object(S.jsx)("img",{alt:"movie-poster",src:t.Poster})}),Object(S.jsxs)("div",{className:"right",children:[Object(S.jsx)("div",{className:"title",children:t.Title}),Object(S.jsx)("div",{className:"plot",children:t.Plot}),Object(S.jsxs)("div",{className:"footer",children:[Object(S.jsx)("div",{className:"rating",children:t.imdbRating}),a?Object(S.jsx)("button",{className:"unfavourite-btn",onClick:this.handleUnFavouriteClick,children:"Unfavourite"}):Object(S.jsx)("button",{className:"favourite-btn",onClick:this.handleFavouriteClick,children:"Favourite"})]})]})]})}}]),a}(i.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).isMovieFavourite=function(t){return-1!==e.props.movies.favourites.indexOf(t)},e.onChangeTab=function(t){e.props.dispatch(T(t))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch({type:b,movies:m})}},{key:"render",value:function(){var e=this,t=this.props,a=t.movies,n=t.search,i=a.list,s=a.favourites,o=a.showFavourites,r=o?s:i;return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(D,{search:n}),Object(S.jsxs)("div",{className:"main",children:[Object(S.jsxs)("div",{className:"tabs",children:[Object(S.jsx)("div",{className:"tab ".concat(o?"":"active-tabs"),onClick:function(){return e.onChangeTab(!1)},children:"Movies"}),Object(S.jsx)("div",{className:"tab ".concat(o?"active-tabs":""),onClick:function(){return e.onChangeTab(!0)},children:"Favourites"})]}),Object(S.jsx)("div",{className:"list",children:r.map((function(t,a){return Object(S.jsx)(C,{movie:t,dispatch:e.props.dispatch,isFavourite:e.isMovieFavourite(t)},"movies-".concat(a))}))}),0===r.length?Object(S.jsx)("div",{className:"no-movies",children:"No movies to show!"}):null]})]})}}]),a}(i.a.Component);var M=Object(s.b)((function(e){return{movies:e.movies,search:e.movies}}))(w),N=a(14),k=a(2),P={list:[],favourites:[],showFavourites:!1};var V=Object(c.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Movie Reducer"),t.type){case b:return Object(k.a)(Object(k.a)({},e),{},{list:t.movies});case p:return Object(k.a)(Object(k.a)({},e),{},{favourites:[t.movie].concat(Object(N.a)(e.favourites))});case j:var a=e.favourites.filter((function(e){return e.Title!==t.movie.Title}));return Object(k.a)(Object(k.a)({},e),{},{favourites:a});case f:return Object(k.a)(Object(k.a)({},e),{},{showFavourites:t.val});case O:return Object(k.a)(Object(k.a)({},e),{},{list:[t.movie].concat(Object(N.a)(e.list))});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(k.a)(Object(k.a)({},e),{},{result:t.movie,showSearchResults:!0});case O:return Object(k.a)(Object(k.a)({},e),{},{showSearchResults:!1});default:return e}}}),E=Object(c.d)(V,Object(c.a)((function(e){e.dispatch,e.getState;return function(e){return function(t){"function"!==typeof t&&console.log("ACTION_TYPE = ",t.type),e(t)}}}),u.a));console.log("store",E),r.a.render(Object(S.jsx)(s.a,{store:E,children:Object(S.jsx)(M,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.48b15374.chunk.js.map