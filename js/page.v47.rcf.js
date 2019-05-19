/*   RCF.JS is a trivial libre javascript program.
*    Copyright (C) 2018 Ryan Fleck
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

console.log(`
8888888b.  .d8888b. 8888888888
888   Y88bd88P  Y88b888
888    888888    888888
888   d88P888       8888888
8888888P" 888       888
888 T88b  888    888888
888  T88b Y88b  d88P888
888   T88b "Y8888P" 888

Welcome.
`);

if(sessionStorage.getItem('present') != "1"){
  console.log("[ debug ] New session. Setting sessionStorage item.");
  sessionStorage.setItem('present', '1');
}

// Invert function for docs pages.
localStorage.SessionName = "RCFLabSessionData";

function invert(){
    if( localStorage.getItem('nightmode') == "False" || localStorage.getItem('nightmode') == null ){
        document.getElementById('dark-theme').setAttribute('media','screen');
        document.getElementById('light-theme').setAttribute('media','disabled');
        localStorage.setItem("nightmode","True");
    }else{
        document.getElementById('light-theme').setAttribute('media','screen');
        document.getElementById('dark-theme').setAttribute('media','disabled');
        localStorage.setItem("nightmode","False");
    }
}

/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
*/
