

new function as() {
    var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    var months = ["Января","Февраля","Марта","Апреля","Майя","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
    let date = new Date();
    let month = months[date.getMonth()];
    let num = date.getDay();
    let num_week = date.getDay();
    let year = date.getFullYear();
    
    console.log(days[num] + ", " + num_week  + " " + "неделя" + " " + month  + " " + year  + " " + "года");
}