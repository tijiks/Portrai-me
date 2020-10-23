'use strict'
let myCookies = {};
function setCookie()
{
  myCookies["_fname"] = document.getElementById("first_name").value;
  myCookies["_lname"] = document.getElementById("last_name").value;
 
  document.cookie = "";
  let expires = new Date(Date.now()+30 * 24 * 3600 * 1000).toString();
  let cookieString = "";
  for (let key in myCookies)
  {
    cookieString = key+"="+myCookies[key]+";"+expires+";";
    document.cookie = cookieString;
  }
}
function loadCookies()
{
  myCookies = {};
  let kv = document.cookie.split(";");
  for (let id in kv)
  {
    let cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  document.getElementById("first_name").value = myCookies["_fname"];
  document.getElementById("last_name").value = myCookies["_lname"];
}
  