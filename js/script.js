//завдання 1

const elem = document.querySelectorAll('h2')[1].textContent = 'Dom method description '

//завдання 2

let link = document.querySelectorAll('a')
for(const element of link){
     if(element.matches('a[href*="site.ua/ua/"]')){
        console.log(element)
     }
 }

 //3 Завдання

 const newul = document.querySelector("ul");
 
 const newli = document.createElement('li')
 newli.setAttribute('id','null')
 newli.textContent=0;
 newul.insertBefore(newli,newul.children[0])
 
 const newli1 = document.createElement('li')
 newli1.setAttribute('id','second')
 newli1.textContent=2;
 newul.insertBefore(newli1,newul.children[2])

 const newli2 = document.createElement('li')
 newli2.setAttribute('id','fourth')
 newli2.textContent=4;
 newul.insertBefore(newli2,newul.children[4])

 console.log(newul) 

 //4 Завдання
 const h1h1 = document.querySelectorAll('h1')[1]
 const newa = document.createElement('a')
 newa.setAttribute('id','link');
 newa.setAttribute('href','https://dom.spec.whatwg.org/');
 newa.appendChild(h1h1)
 console.log(newa)

