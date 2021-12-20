menu_list_array = ["Veg Margherita Pizza","PEPPY PANEER","CHEESE N CORN","PANEER MAKHANI","Momo Mia pizza"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
var imgtags='<img id="im1" src="https://o.remove.bg/downloads/08683a97-8b36-4762-9a19-2e32369879a0/pizza-png-11553999379orjd1miyt1-removebg-preview.png">'
 menu_list_array.sort();
        htmldata=""

        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
