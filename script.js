var models=[
    {
        name:'Audi-A8',
        image:'img/Audi-A8-1.jpg',
        description:'lorem ipsum Audi-A8',
        link:'https://www.google.com'
    },
    {
        name:'Dodge-Challenger',
        image:'img/dodge-challenger-1969_2.png',
        description:'lorem ipsum Dodge-Challenger',
        link:'https://www.facebook.com'
    },
    {
        name:'Jeep-Wrangler',
        image:'img/jeep-wrangler.jpg',
        description:'lorem ipsum Jeep-Wrangler',
        link:'https://www.amazon.com'
    },
    {
        name:'Mercedes-G63',
        image:'img/MERCEDESG-63.jpeg',
        description:'lorem ipsum Mercedes-G63',
        link:'https://www.ebay.com'
    },
]
var index=0;
var slideCount=models.length;
var interval;

var settings={
    duration:'2000',
    random:false
}

init(settings);

document.querySelector('#LArrow').addEventListener('click',function(){
    index--;
    console.log(index)
    showSlide(index);
});
document.querySelector('#RArrow').addEventListener('click',function(){
    index++;
    console.log(index)
    showSlide(index);
});
document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})
function showSlide(i){
   index=i;
    if(i<0){
        index=slideCount-1;
    }
    if(index>=slideCount){
        index=0;
    }

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-title').textContent=models[index].name;
    document.querySelector('.card-text').textContent=models[index].description;
    document.querySelector('.card-link').setAttribute('href',models[index].link);
};

function init(settings){
    var prev;
   interval= setInterval(function(){
   if (settings.random) {
       do {
           index=(Math.floor(Math.random()*slideCount) )
       } while (index==prev);
       prev=index
       console.log(index);
       showSlide(index);
   }
   else{
       index++;
       console.log(index);
       showSlide(index);
   }},settings.duration)
   showSlide(index)
}