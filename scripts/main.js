var DIV_IMAGE_SELECTOR = '[data-image-role="product-add"]';
var IMAGE_SELECTOR = '[data-image-role="product-image"]';

var numOfProdact=0;



/**************************/
var myProdact={};



var modal = document.querySelector(".modal");
var trigger = document.querySelector("#cart");
var closeButton = document.querySelector(".close-button");


function toggleModal() {
    modal.classList.toggle("show-modal");

    var form1= document.getElementById("myform");


    var t="<div class='row'  style='background: #ffd0d0;'>\n" +
        "    <div class='col-25'>\n" +
        "        <label> name  </label>\n" +
        "\n" +
        "    </div>\n" +
        "    <div class='col-25'>\n" +
        "        <label> price </label>\n" +
        "\n" +
        "    </div>\n" +
        "    <div class='col-25'>\n" +
        "        <label> number </label>\n" +
        "\n" +
        "    </div>\n" +
        "\n" +
        "    <div class='col-25'>\n" +
        "        <label> Total </label>\n" +
        "\n" +
        "    </div>\n" +
        "\n" +
        "</div>";

    // form1.innerText= (t);
// for (var k in myProdact) {
//     // check if the property/key is defined in the object itself, not in parent
//     if (myProdact.hasOwnProperty(k)) {
//         console.log(k, myProdact[k]);
//     }
// }

    for (var k in myProdact){
        t = t + "<div class='row'>\n" +
            "    <div class='col-25'>\n" +
            "        <label> "+k+" </label>\n" +
            "\n" +
            "    </div>\n" +
            "\n" +
            "\n" +
            "    <div class='col-25'>\n" +
            "        <input type='number'  id='p"+k+"' name='s_change' value='"+myProdact[k]+"' readonly>\n" +
            "\n" +
            "    </div>\n" +
            "\n" +
            "    <div class='col-25'>\n" +
            "        <input type='number' id='"+k+"' onchange='changeTotal(this)' data-id='"+k+"'  name='s_change' value='1'>\n" +
            "\n" +
            "    </div>\n" +
            "    <div class='col-25'>\n" +
            "        <input type='number' id='t"+k+"' name='s_total'  class='Ptotal' value='"+myProdact[k]+"' READONLY>\n" +
            "\n" +
            "    </div>\n" +
            "\n" +
            "</div>";
    }


    form1.innerHTML= (t);
    //
    //
    //
    //

}

function changeTotal(e) {
    // alert(e.value);
    var x=e.parentNode;

   var t= e.getAttribute('data-id');

 var total=  document.getElementById("t"+t);
 var price=document.getElementById("p"+t);
    total.value=parseInt(e.value)*parseInt(price.value);

// alert(t);

   // var finalTotal= document.getElementsByClassName('Ptotal');
  // var  sum=0;
  //   finalTotal.forEach(function (v) {
  //       alert(v.text());
  //   })
  //
  //   var thumbnails = document.getElementsByClassName('Ptotal');
  //   var thumbnailArray = [].slice.call(thumbnails);
  //   for ( var v in thumbnailArray )
  //   {
  //       alert(v.value);
  //   }


        // sum+= i.value;

    // alert(sum);

}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);





/********************************************/

// showProductInCarytClickHandler(document.getElementById('cart'));

function addProductClickHandler(product) {
    product.addEventListener('click', function (event) {
        event.preventDefault();
        // More code to follow.
        numOfProdact++;
      // alert(numOfProdact);

      var countItems=document.getElementById('shopping-cart');
        countItems.innerText=numOfProdact;



//         product.setAttributeNode(attr);
// var attr=document.createAttribute('disp')

        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parent('.product-item').find("img").eq(0);

        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');

            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }

        // var imgSelected = this.previousElementSibling.previousElementSibling.previousElementSibling;
        var imgSelected = $(this).parent('.product-item').find("img").eq(1);

        setTimeout(function () {
            imgSelected.addClass('image_selected_active');
            }, 1000);
        var price = $(this).parent('.product-item').find("span").eq(0);
        // var price2=price.firstChild;
        var name = $(this).parent('.product-item').find("p").eq(0);
        // alert( name.text());
        // alert( price.text());
        //


        myProdact[name.text()]=price.text();


        // $(this).remove();

    });
}



function getThumbnailsArray() {
    'use strict';
    var products = document.querySelectorAll(DIV_IMAGE_SELECTOR);
    var productArray = [].slice.call(products);
    return productArray;
}

function initializeEvents() {
    'use strict';
    var products = getThumbnailsArray();
    // products.forEach(addProductHoverHandler);

    products.forEach(addProductClickHandler);

}
initializeEvents();




function prodactHover(e) {
//            alert("dd");
//            this.setAttribute("display","block");
    e.lastElementChild.style.cssText="display:block";
}

function prodactLeave(e) {
//            alert("dd");
//            this.setAttribute("display","block");
    e.lastElementChild.style.cssText="display:none";
}
var status=1;
function openNav() {
    if(status==0)
        status=1;
    else
        status=0;
//            alert("s");
    var n= document.getElementById("nav_ul");
    if(status==0)
        n.style.cssText="display:none";
    else
        n.style.cssText="display:block";


}



$('.add-to-cart').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});
