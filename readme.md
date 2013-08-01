# YWAM Scrolling Languages

As requested, the code used to have 'Youth With A Mission' scrolling into different languages as seen on [ywam.org's](http://www.ywam.org) footer. A demo can be found [here](http://joshuadelange.github.io/ywam-scrolling-languages/).


## How to implement this into your site


### 1. Insert HTML

Insert the following HTML code where you want the languages to scroll:

     <div class="scrolling-languages">
         <p class="title">
             <span class="text">Youth With A Mission</span>
             <span class="cursor"></span>
         </p>
         <p class="subtitle">To know God and to make Him known.</p>
     </div>
     

### 2. Include CSS/JS

Copy and include the ywam-scrolling-language css and js files:

CSS: `<link rel="stylesheet" href="ywam-scrolling-languages.css">`

JS: `<script src="ywam-scrolling-languages.js"></script>`


### 3. Customize

Feel free to ajust the ywam-scrolling-language files to make the thing fit into your site. A few pointers:

- **Background color:** Make sure to change the background-color property on both line 3 and 36 in ywam-scrolling-languages.css
- **Scrolling time:** To adjust the time in between animations, change the ``languageTimeout`` variable on line 16 of ywam-scrolling-languages.js. This value is in microseconds


If you have any questions, please feel free to contact me at [joshua.delange@gmail.com](mailto:joshua.delange@gmail.com)!