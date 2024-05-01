function fade(){
    $('#img1').fadeToggle(3000)
}

function func1(){
    // document.getElementsByTagName(element name) this is the method to get a tag and below is jQuery method 
    // $('div').css('color','white');

    // document.getElementById(id name) this is the method to get an id in js below is method to select an id in jQury
    // $('#p1').css('font-style','italic');
    // id's are unique so for selecting more than 1 item use class

    // document.getElementsByClass(class name) this is method of js 
    // $('.para1').css('font-style','italic');

    // Accessing elements without id or class
    // $('p:even').fadeToggle('slow');
    // $('p:first-child').fadeToggle();
    $('p:odd').fadeToggle();

}