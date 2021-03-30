"use strict";
let arrayObject = [];
function FormData(name, title, subject, content, day, month, year) {
    this.name = name;
    this.title = title;
    this.subject = subject;
    this.content = content;
    this.day = day;
    this.month = month;
    this.year = year;
    arrayObject.push(this);
}

// console.log(test);
const blog=document.getElementById('blog')
const form = document.getElementById('form');
form.addEventListener('submit', clickHandler);
    function clickHandler(event) {
        event.preventDefault();
        let autherName = event.target.autherName.value;
        let autherTitle = event.target.autherTitle.value;
        let Content = event.target.Content.value;
        let select = event.target.select.value; // neeeeeeeeeeeeeeeeeeeeeed
        let day = event.target.day.value;
        let month = event.target.month.value;
        let year = event.target.year.value;
        // let inputObject = new FormData(autherName,autherTitle,Content,select,day,month,year);
        if (localStorage.getItem('autherName')===null){

        localStorage.setItem('autherName', autherName);
        localStorage.setItem('autherTitle', autherTitle);
        localStorage.setItem('Content', Content);
        localStorage.setItem('select', select);
        localStorage.setItem('day', JSON.stringify(day));
        localStorage.setItem('month', JSON.stringify(month));
        localStorage.setItem('year', JSON.stringify(year));
        } else {
            let oldName = localStorage.getItem('autherName');
            let oldTitle = localStorage.getItem('autherTitle');
            let oldContent = localStorage.getItem('Content');
            let oldSelect = localStorage.getItem('select');
            let oldDay = JSON.parse(localStorage.getItem('day'));
            let oldMonth = JSON.parse(localStorage.getItem('month'));
            let old = JSON.parse(localStorage.getItem('year'));
            let p = document.createElement('p');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h3new = document.createElement('h3');
            let img = document.createElement('img');
            let Likes = document.createElement('h6');
            blog.appendChild(h2);
            blog.appendChild(img);
            blog.appendChild(h3);
            blog.appendChild(h3new);
            blog.appendChild(Likes);
            blog.appendChild(p);
            h2.innerHTML = oldTitle;
            h3.innerHTML = 'Author: ' + oldName;
            h3new.innerHTML = 'Date: ' + oldDay + '-' + oldMonth + '-' + old;
            img.src = './asac_ltuc.jpg';
            Likes.innerHTML = 'likes ' + randomLikes(1, 500) + "  "+ oldSelect;
            p.innerHTML = select + ' ' + oldContent;
        }
        
        let p = document.createElement('p');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h3new = document.createElement('h3');
        let img = document.createElement('img');
        let Likes = document.createElement('h6');
        blog.appendChild(h2);
        blog.appendChild(img);
        blog.appendChild(h3);
        blog.appendChild(h3new);
        blog.appendChild(Likes);
        blog.appendChild(p);
        h2.innerHTML = autherTitle;
        h3.innerHTML = 'Author: ' + autherName;
        h3new.innerHTML = 'Date: ' + day + '-' + month + '-' + year;
        img.src = './asac_ltuc.jpg';
        Likes.innerHTML = 'likes ' + randomLikes(1, 500) + "  "+ select;
        p.innerHTML = select + ' ' + Content;
        
    }


    function randomLikes(min, max) {
       
        return Math.floor(Math.random() * (max - min) + min)
    }

