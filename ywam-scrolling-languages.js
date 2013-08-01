$(document).ready(function(){

    var ywamInDifferentLanguages = [
        "예수전도단", //korean
        "Juventud Con Una Misión", //spanish
        "Jovens Com Uma Missão", //portugese
        "Jeunesse En Mission", //french
        "Jugend mit einer Mission", //german
        "Jeugd met een Opdracht", //dutch
        "Ungdom I Oppdrag", //norwegian
        "Ungdom Med Uppgift", //swedish
        "Ungdom Med Opgave", //danish
        "Youth With A Mission" //back to english
    ],
    //The time to wait for the next animation
    languageTimeout = 3500;

    //the function to keep calling
    var changeYWAMLanguage = function(){ 

        var $label = $('.scrolling-languages .title'), //the label
            $text = $label.find('.text'), //where the actual text is
            $cursor = $label.find('.cursor'), //cursor, needed for our type of animation
            newLanguage = ywamInDifferentLanguages.shift() ; //shift: take and remove the first language

        //animate the cursor
        $cursor.animate({
            left: $label.css('paddingLeft')
        }, 'slow',
        function(){
            $text.html(newLanguage) ; //set the text to the new language
            $cursor.animate({left: '700px'}, 'slow') ; //animate the cursor back
        }) ;

        //add the language to the bottom of the list
        ywamInDifferentLanguages.push(newLanguage) ;

        //initiate the next one
        setTimeout(changeYWAMLanguage, languageTimeout) ;
    } ;

    //start it off!
    setTimeout(changeYWAMLanguage, languageTimeout) ;

}) ;