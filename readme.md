# плавная прокрутки на чистом JS
#### html
```html
<body>
    <div class="button_block">
        <div class="button">page down &dArr;</div>
    </div>
    <section class="section"></section>
    <footer class="footer" id="footer">
        <div class="footer_block">
            <div class="button button_butom">page UP &uArr;</div>
        </div>
       
    </footer>
</body>
```
#### JS
##### создал функцию scrollTo:
```javascripy
function scrollTo(element)
```
####  объект window это окно браузера которое прокручивается функцией скролл
```javascripy
    window.scroll
```
#### сколько от этого елемента до верха страницы, всё будет считаться автоматически, behavior Отвечает за плавную прокрутку
```javascript 
        top: element.offsetTop, 
        behavior: 'smooth'
```
#### получил елементы со страницы с которыми буду работать(секции, кнопки)
```javascript
let button = document.querySelector('.button'),
    buttonButom = document.querySelector('.button_butom'),
    section = document.querySelector('.section'),
    footer = document.querySelector('#footer');
```
#### повесил обработчики событий на каждую из кнопок, что при клике будет прокручивать и до какой секции
```javascript
button.addEventListener('click', () => {
    console.log('клик');
    scrollTo(footer);
});
buttonButom.addEventListener('click', () => {
    scrollTo(section);
});
```
