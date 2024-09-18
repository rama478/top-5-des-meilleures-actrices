$(function() {
    var $mainMenuItems = $("#main-menu ul").children("li");     //capture les enfants qu"il y'a dans main-menu ul qui sont des li
    var totalMainMenuItems = $mainMenuItems.length;      //nombre d'élement qu'il y'a dans main menu donc le nombre de li
    // var openedIndex = -1; //permet de connaitre l'index de l'élément qui est ouvert  partant donc de 0 à 4 (5 actrices) mais quand y'aura -1 <=> cet élément du menu est fermé
    var openedIndex = 2;     //pour animer Jessica Alba au début

    var init = function () {
       bindEvents();
       

       //pour que JESSICA ALBA S'ouvre dès le début
       if(validIndex(openedIndex)){
        animateItem($mainMenuItems.eq(openedIndex),true,700);
       }
    };



    var bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();           //this pour indiquer l'élément sur lequel on a cliqué ,donc l'image(actrice), surlequel on a cliqué.on use .parent()puisque li est parent direct de div (class="images")
           
            var $item = $mainMenuItems.eq(newIndex) ;  //retourne le li sur lequel on a cliqué
            if(openedIndex == newIndex){
                animateItem($item,false,250);   //si l'index sur lequel je viens de cliquer est = à l'index qui était déjà ouvert,on ferme avec toOpen =false
                openedIndex = -1;
            }
            else{
                if(validIndex(newIndex)){
                    animateItem($mainMenuItems.eq(openedIndex),false,250)  //avec false on ferme donc l'item qui était  ouvert 
                    openedIndex=newIndex;
                    animateItem($item,true,250);  //on ouvre l'item sur le quel on vient de cliquer et on ferme l'ancien 
                }
            }
            //var $colorImage = $item.find(".color");    //recupère l'image colorée de cette li
            
            //$colorImage.animate({left:"0px"},250);   //met l'image colorée sur l'image black and white donc on verra l'image colorée .on lance donc une animation qui fera quiter l'image colorée qui était à 140px du left 0px qui va donc le mettre sur l'image black and white 
           // $item.animate({width:"420px"},250);  //le left de le description est bonne car elle est à 140Px donc elle est positionnée après l'image colorée juste que'on doit augmenter la largeur d l'item donc du li pour qu'on puisse voir les description
            
           
          
       
       
       
        });
    // pour les boutons en bas au lieu d'écrire du css
    $(".button").hover(
        function(){
            $(this).addClass("hovered");
        },
        function () {
            $(this).removeClass("hovered");
          }

    );


    $(".button").click(function () {
        var newIndex = $(this).index()  //retourne l'index du surlequel on est sachant que index du bouton = index de l'image donc le bouton contenant le nom de scarlett johasson est à l'indice 0 comme son images en black and white
        var $item=$mainMenuItems.eq(newIndex)
        
        var $item = $mainMenuItems.eq(newIndex) ;  //retourne le li sur lequel on a cliqué
        if(openedIndex == newIndex){
            animateItem($item,false,250);   //si l'index sur lequel je viens de cliquer est = à l'index qui était déjà ouvert,on ferme avec toOpen =false
            openedIndex = -1;
        }
        else{
            if(validIndex(newIndex)){
                animateItem($mainMenuItems.eq(openedIndex),false,250)  //avec false on ferme donc l'item qui était  ouvert 
                openedIndex=newIndex;
                animateItem($item,true,250);  //on ouvre l'item sur le quel on vient de cliquer et on ferme l'ancien 
            }
        }
      })
    
    
    };



    var validIndex = function(indexToCheck){
        return(indexToCheck >=0) && (indexToCheck<totalMainMenuItems)
    }

    animateItem = function($item,toOpen,speed){
        var $colorImage = $item.find(".color") ;   
        var $itemParam = toOpen ? {width:"420px"} : {width:"140px"};  // quand l'image est ouverte on augmente la largeur pour voir descrition et image colorée
        var $colorImage = toOpen ? {left:"0px"} : {left:"140px"};  //quand image ouverte,le left image colorée = 0px, fermé => left image colorée = 140px et ddonc l'image sera cachée et on verra que le black and white

        $colorImage.animate($colorImage,speed);   
        $item.animate($itemParam,speed);  
       
    }





    init();



});
