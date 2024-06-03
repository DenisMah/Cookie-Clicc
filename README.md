Cookie-Clicc
===============================
**Spapp** is a simple web app designed to sell cookies & showcase my understanding of the principles of frontned web development. It
started as a project for my Foundations of Frontend Web Development course which turned into a passion project which I will fully continue
implementing as time goes on.
----------


HTML
-------------
```html
if(user.isHungry){
  user.eatCookie();
}
```
The website is divided into several HTML compontents. 

<ol>
  <li>A landing page</li>
  <li>Products page</li>
  <li>About us page</li>
  <li>A registration form page</li>
</ol>

-
----------
JS
-------------
The page's content is dynamically loaded from a JSON array locally. An AJAX function is called to simulate fetching DATA from backend.

```js
$(document).ready(function(){
  $.getJSON('../JSON/items.json', function (data) {
  console.log(data);
  });
})
-
```
With this, we can simulate backend without actually having one.


I've also built a storage system utilizing localStorage API. The key:value pairs for the cookies are as follows :

KEY - ID(a number that gets incremented for each click, giving each cookie an unique ID) COOKIENAME (Example Chocolate Chip Cookies)
This would produce a key with the value ID 1 Chocolate Chip Cookies.

VALUE - Is calculated by entering the amount of cookies bought in the input field. By default, only one box of cookies will be bought.

So, the final product would be ID 1 Chocolate Chip Cookies : 1

```js
          button.addEventListener("click", () => {
            modaldiv.remove();
            toastr.success("Thanks for the purchase!");
            localStorage.setItem(`${id} ${dataitem.name}`, value);
            renderPurchases();
          });

```
