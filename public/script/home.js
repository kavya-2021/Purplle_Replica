//nav bar import






//move to top button 
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// master slider


let count = 0; 
let slideshowData = [
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1639401029_header-red-banner-web-1.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639455445_gv-web-banner-1298x418-22.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639370472_streax-professional_webhp.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1632390971_elec-web2.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638856741_takeover-web.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639382906_faces_web_hp.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638889093_hero-web.jpg",
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg",
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg"
];

document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1639401029_header-red-banner-web-1.gif)"

function slideShow(count){
   if(count == 0) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1639401029_header-red-banner-web-1.gif)"
   if(count == 1) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639455445_gv-web-banner-1298x418-22.jpg)"
   if(count == 2) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639370472_streax-professional_webhp.jpg)";
   if(count == 3) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1632390971_elec-web2.gif)"
   if(count == 4) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638856741_takeover-web.jpg)"
   if(count == 5) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639382906_faces_web_hp.jpg)"
   if(count == 6) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638889093_hero-web.jpg)"
   if(count == 7) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg)"
   if(count == 8) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg)"
}

document.querySelector("#left").addEventListener("click",leftSide)
document.querySelector("#right").addEventListener("click",rightSide)

function leftSide() {
    if(count == 0 ){
        count = slideshowData.length -1 ;    
    } 
    else {
        count--;
        // timer.stop() 
        // timer.start()
    }
    slideShow(count);
}

function rightSide() {
   if(count == slideshowData.length-1) {
       count = 0;
   }
   else {
    count++;
    // timer.stop() 
    // timer.start();
   }
   slideShow(count);
}

let timer = setInterval(function() {
    count++;
    if(count == slideshowData.length-1) count = 0;
    else if (count == 0)  count = slideshowData.length -1 ;
    slideShow(count);
},3000);



// another  master slider


// gif slider


function brandSlidera() {
  var slideList = document.querySelector(".slider_div2");

  var count = 1;
  var click = 2;
  var size = document.querySelector(".slider_div2").offsetWidth;
  if (size < 900) {
    click = 6;
  }
  if (count == 1) {
    document.getElementById("leftSwipea").style.opacity = 0.5;
    document.getElementById("leftSwipea").style.display = "hidden";
  }
  console.log(size);
  function stepBacka() {
    if (count == 2) {
      document.getElementById("leftSwipea").style.opacity = 0.5;
    }
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("rightSwipea").style.opacity = 1;

      count++;
    } else {
      document.getElementById("leftSwipea").style.opacity = 0.5;
      document.getElementById("leftSwipea").style.display = "hidden";
    }
  }
  function stepForwarda() {
    if (count == click - 1) {
      document.getElementById("rightSwipea").style.opacity = 0.5;
      document.getElementById("rightSwipea").style.display = "hidden";
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("leftSwipea").style.opacity = 1;
      count++;
    } else {
      document.getElementById("rightSwipea").style.opacity = 0.5;
      document.getElementById("rightSwipea").style.display = "hidden";
    }
  }
  document
    .getElementById("leftSwipea")
    .addEventListener("click", stepBacka);
  document
    .getElementById("rightSwipea")
    .addEventListener("click", stepForwarda);
}

brandSlidera();



// purple slider


function brandSliderp() {
  var slideList = document.querySelector(".slider_div1");

  var count = 1;
  var click = 3;
  var size = document.querySelector(".slider_div1").offsetWidth;
  if (size < 800) {
    click = 6;
  }
  if (count == 1) {
    document.getElementById("leftSwipep").style.opacity = 0.5;
    document.getElementById("leftSwipep").style.display = "hidden";
  }
  console.log(size);
  function stepBackp() {
    if (count == 2) {
      document.getElementById("leftSwipep").style.opacity = 0.5;
    }
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("rightSwipep").style.opacity = 1;

      count++;
    } else {
      document.getElementById("leftSwipep").style.opacity = 0.5;
      document.getElementById("leftSwipep").style.display = "hidden";
    }
  }
  function stepForwardp() {
    if (count == click - 1) {
      document.getElementById("rightSwipep").style.opacity = 0.5;
      document.getElementById("rightSwipep").style.display = "hidden";
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("leftSwipep").style.opacity = 1;
      count++;
    } else {
      document.getElementById("rightSwipep").style.opacity = 0.5;
      document.getElementById("rightSwipep").style.display = "hidden";
    }
  }
  document
    .getElementById("leftSwipep")
    .addEventListener("click", stepBackp);
  document
    .getElementById("rightSwipep")
    .addEventListener("click", stepForwardp);
}

brandSliderp();


// cards vala slider


function brandSlider() {
    var slideList = document.querySelector(".slider");
  
    var count = 1;
    var click = 8;
    var size = document.querySelector(".slider").offsetWidth;
    if (size < 900) {
      click = 11;
    }
    if (count == 1) {
      document.getElementById("leftSwipe").style.opacity = 0.5;
      document.getElementById("leftSwipe").style.display = "hidden";
    }
    console.log(size);
    function stepBack() {
      if (count == 2) {
        document.getElementById("leftSwipe").style.opacity = 0.5;
      }
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("rightSwipe").style.opacity = 1;
  
        count++;
      } else {
        document.getElementById("leftSwipe").style.opacity = 0.5;
        document.getElementById("leftSwipe").style.display = "hidden";
      }
    }
    function stepForward() {
      if (count == click - 1) {
        document.getElementById("rightSwipe").style.opacity = 0.5;
        document.getElementById("rightSwipe").style.display = "hidden";
      }
      if (count < click) {
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("leftSwipe").style.opacity = 1;
        count++;
      } else {
        document.getElementById("rightSwipe").style.opacity = 0.5;
        document.getElementById("rightSwipe").style.display = "hidden";
      }
    }
    document
      .getElementById("leftSwipe")
      .addEventListener("click", stepBack);
    document
      .getElementById("rightSwipe")
      .addEventListener("click", stepForward);
  }
  brandSlider();


  //product slider

  
function productSliders() {
  var slideList = document.querySelector(".sliderP")

  var count = 1
  var click = 2
  var size = document.querySelector(".sliderP").offsetWidth
  if (size < 200) {
    click = 2
  }
  if (count == 1) {
    document.getElementById("swipe_L").style.opacity = 0.5
    document.getElementById("swipe_L").style.display = "hidden"
  }
  console.log(size)
  function moveToright() {
    if (count == 2) {
      document.getElementById("swipe_L").style.opacity = 0.5
    }
    if (count > 1) {
      count = count - 2
      slideList.style.left = "-" + count * 31 + "rem"

      document.getElementById("swipe_R").style.opacity = 1

      count++
    } else {
      document.getElementById("swipe_L").style.opacity = 0.5
      document.getElementById("swipe_L").style.display = "hidden"
    }
  }
  function moveToleft() {
    if (count == click - 1) {
      document.getElementById("swipe_R").style.opacity = 0.5
      document.getElementById("swipe_R").style.display = "hidden"
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem"

      document.getElementById("swipe_L").style.opacity = 1
      count++
    } else {
      document.getElementById("swipe_R").style.opacity = 0.5
      document.getElementById("swipe_R").style.display = "hidden"
    }
  }
  document.getElementById("swipe_L").addEventListener("click", moveToright)
  document.getElementById("swipe_R").addEventListener("click", moveToleft)
}

productSliders()



//last slider

//last brand slider
function brandSlider10() {
    var slideList = document.querySelector(".slider_div");
  
    var count = 1;
    var click = 8;
    var size = document.querySelector(".slider_div").offsetWidth;
    if (size < 900) {
      click = 11;
    }
    if (count == 1) {
      document.getElementById("leftSwipe10").style.opacity = 0.5;
      document.getElementById("leftSwipe10").style.display = "hidden";
    }
    console.log(size);
    function stepBack10() {
      if (count == 2) {
        document.getElementById("leftSwipe10").style.opacity = 0.5;
      }
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("rightSwipe10").style.opacity = 1;
  
        count++;
      } else {
        document.getElementById("leftSwipe10").style.opacity = 0.5;
        document.getElementById("leftSwipe10").style.display = "hidden";
      }
    }
    function stepForward10() {
      if (count == click - 1) {
        document.getElementById("rightSwipe10").style.opacity = 0.5;
        document.getElementById("rightSwipe10").style.display = "hidden";
      }
      if (count < click) {
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("leftSwipe10").style.opacity = 1;
        count++;
      } else {
        document.getElementById("rightSwipe10").style.opacity = 0.5;
        document.getElementById("rightSwipe10").style.display = "hidden";
      }
    }
    document
      .getElementById("leftSwipe10")
      .addEventListener("click", stepBack10);
    document
      .getElementById("rightSwipe10")
      .addEventListener("click", stepForward10);
  }
  
  brandSlider10();













  // top products 


  


let products = [

  {
          id : "AA",
          title : " NY Bae Blurin' Primer|Face Primer|Blurs Out Pores & Fine Lines| Enriched With Vitamin E| Radiant Glow| All Skin Types| Matte products",
          rating : 4.9,
          brand: "NY Bae",
          price : 215,
          discount: 0.12,
          qty : 1,
          description : "NY Bae's Blurin Primer is the hot goss of Bae town. It's every girl's must have. And for good reasons too. As you dab-dab across your face, the light-weight immediately makes you go' wooohoo! But did you know it has extra super-powers too? Of course, it does a fab job on hiding acne scars, blemishes, minimising pores and leaving behind a perfect, even-toned finish. But that apart, it even hydrates and nourishes the skin. Didn't we tell you it's an absolute wonder to have? So go prep up and hit the town with flawless skin.",
          best_before : "31 Jan 2023" ,
          skin_concern : "Fine lines and Pores",
          skin_type : "All Skin Types",
          Speciality : "Enriched with Vitamin E,oil Free",
          finish : "Matte",
          Benefits : "Blurs out Pores & Fine Lines  Enriched with Vitamin E, Even skin tone, Hydrating, Light Weight",
          oneBenefit : "Hydrating",
          type: "primer",
          origin : "India",
          image_url : ["https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/240161/ny-bae-primer-white-15g-15_10_display_1631800058_e824cd72.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/240161/ny-bae-primer-white-15g-15_6_display_1623941086_74d4845f.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/240161/ny-bae-primer-white-15g-15_4_display_1623941083_ab8853d8.jpg","https://media6.ppl-media.com/mediafiles/ecomm/promo/1626774900_primer-a8_04.jpg"]
      },{
          id : "AM",
          title : "Makeup Revolution X Friends Limitless Palette",
          rating : 4.9,
          brand: "Makeup Revolution",
          price : 2850,
          discount: 0.21,
          qty : 1,
          description : "This Revolution Flawless Limitless 27 shade eyeshadow palette allows you to create endless looks for special occassions, natural nude everyday looks and eye poppin' looks to have people saying Oh.My.God! This palette contains everything from matte pops of blue, orange and pinks, plus shimmery olives, nudes and golds, all encased in a movie clapper board style for show stopping looks!",
          best_before : "31 July 2024" ,
          skin_concern : "Gorgeous eyes",
          skin_type : "All Skin Types",
          Speciality : "Enriched with Vitamin E,oil Free",
          finish : "Matte",
          Benefits : "Bold & Matte, Consistent Shade, Easy To Blend, Fadeproof, Highly Pigmented",
          oneBenefit : "Long Lasting",
          type: "eyeshadow",
          origin : "India",
          image_url : ["https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/228489/makeup-revolution-x-friends-limitless-palette_1_display_1612695732_ca9c989a.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/228489/makeup-revolution-x-friends-limitless-palette_3_display_1612695733_1149f42a.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/228489/makeup-revolution-x-friends-limitless-palette_4_display_1612695733_30b71ea6.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/228489/makeup-revolution-x-friends-limitless-palette_2_display_1612695732_8fba6a28.jpg"]
      },
      {
          id : "AE",
          title : "Maybelline New York Fit me Primer Matte + Poreless",
          rating : 5,
          brand: "Maybelline",
          price : 499,
          discount: 0.15,
          qty : 1,
          description : "Maybelline New York -  Fit Me Matte and Poreless primer is a melting gel cream primer that fits skin texture for a longer lasting flawless matte look.The Fit me matte + poreless primer makeup is best suited for normal to oily skin.The Maybelline Fit Me Matte and Poreless primer for oily skin has blurring powders that absorbs and controls oil. Can be worn with or without a moisturizer.",
          best_before : "29 February 2024" ,
          skin_concern : "Dull skin, Fines Lines",
          skin_type : "All Skin Types",
          Speciality : "Enriched with Vitamin E,oil Free",
          finish : "Matte",
          Benefits : "Even Skin Tone, Minimizing Pores, Oil Control, Radiant Skin, Retains Moisture",
          oneBenefit : "Even Skin Tone",
          type: "primer",
          origin : "India",
          image_url : ["https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/227298/maybelline-new-york-fit-me-primer-matte-poreless_8_display_1634019309_3768fc1f.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/227298/maybelline-new-york-fit-me-primer-matte-poreless_10_display_1627888064_7258557d.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/227298/maybelline-new-york-fit-me-primer-matte-poreless_12_display_1627888065_be0d3e05.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/227298/maybelline-new-york-fit-me-primer-matte-poreless_11_display_1627888065_b0735d26.jpg"]
      },
      {
          id : "AF",
          title : "Purplle Ultra HD Matte Mini Liquid Lipstick| Long Lasting |Transferproof |Smudgeproof| Red - My First Hook-up 11 (1.6 ml)",
          rating : 4.9,
          brand: "Purplle",
          price : 225,
          discount: 0.12,
          qty : 1,
          description : "A mini formula of Purplle Ultra HD Matte Liquid Lipstick is engineered to give you a finish which helps take your lipstick game to another level. Get the best of Purplle on your lips to give you an enticing look. Once applied, expect the pigmentation to be stronger and the shade to stay longer without reapplication. Enriched with Vitamin E to make sure that your lips are conditioned while they don a gorgeous colour. Use your lips for all the activities possible, smiling, talking, eating, drinking, kissing, without the fear of your lip colour smudging. It's water resistant formula enables you to consume any kind of drink without having to worry about colour fading or transferring. Want to remove it? Don't worry it won't stay if you don't want it to. Won't stain your lips when you remove it. Liquid when applied to give a Matte finish only to give you Ultra Soft lips. Get the most of it with just one swipe with the leaf-shaped applicator which reaches to every corner of your lips. We love animals as much as we love you and thus these lipsticks are completely cruelty-free. Whenever you apply this, you know that you have acquired the ability to express yourself in a unique way",
          best_before : "31 March 2024" ,
          skin_concern : "Hydrated Lips",
          skin_type : "All Skin Types",
          Speciality : "Enriched with Vitamin E,oil Free",
          finish : "Matte",
          Benefits : "High Color Payoff, Highly Pigmented, Long Lasting, Single Stroke Application, Water Resistant",
          oneBenefit : "Long Lasting",
          type: "lipStick",
          origin : "India",
          image_url : ["https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/224415/purplle-mini-liquid-lipstick-maroon-my-first-hook-up-11-4-8-ml-48_9_display_1632903538_2c535504.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/224415/purplle-mini-liquid-lipstick-maroon-my-first-hook-up-11-4-8-ml-48_7_display_1627621814_cc476091.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/224415/purplle-mini-liquid-lipstick-maroon-my-first-hook-up-11-4-8-ml-48_8_display_1627621815_cccb9360.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/224415/purplle-mini-liquid-lipstick-maroon-my-first-hook-up-11-4-8-ml-48_3_display_1627621810_629d7ab4.jpg"]
      },
      {
          id : "AT",
          title : "Purplle Nail Lacquer, Nude, Matte - High On Food 2 (9 ml)",
          rating : 4.8,
          brand: "Purplle",
          price : 149,
          discount: 0.50,
          qty : 1,
          description : "Give your nails their best friend in the form of Purplle's Nail Lacquer. A unique range with a matte finish, this shade gives your nail the ultimate look you're looking for. Perfectly safe for your nails, this beauty comes with a brush, helping you to apply the colour in one go. Just like a true friend, this shade stays for a long time and gives you an unforgettable finish. Its time to express yourself with different shades everytime you step out of the house",
          best_before : "31 August 2023" ,
          skin_concern : "Happy and Colourful Nails",
          skin_type : "All Skin Types",
          Speciality : "Enriched with Vitamin E,oil Free",
          finish : "Matte",
          Benefits : "Chip Resistant, Consistent Shade, Long Lasting, One swipe application, Shine",
          oneBenefit : "Long Lasting",
          type: "nailpolish",
          origin : "India",
          image_url : ["https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/155861/purplle-nail-lacquer-matte-high-on-food-2-9-ml_4_display_1571389730_41cd3c58.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/155861/purplle-nail-lacquer-matte-high-on-food-2-9-ml_1_display_1542889245_0c159b37.jpg","https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/155861/purplle-nail-lacquer-matte-high-on-food-2-9-ml_3_display_1542889245_0093c557.jpg","https://media4.purplle.com/static/img/brand//__1620637402_f5931e18.jpg"]
      }
  ];
  
  
  
        let cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  
  let contain_Div = document.querySelector("#container_pro_home");
  
  ShowProductsOnMain(products,contain_Div,cartArray);
  
      function ShowProductsOnMain(products,location,cartArray){
      location.innerHTML = "";
     // document.querySelector("#ForNoShow").innerHTML = "";
      products.map(function(item,index){
          let Mdiv = document.createElement("div");
          Mdiv.setAttribute("id","Mdiv");
          Mdiv.style.cursor = "pointer";
  
          var overlayDiv = document.createElement('div');
          overlayDiv.setAttribute("id","overlay");
  
          let btn = document.createElement("button");
          btn.textContent = "ADD TO CART";
          btn.setAttribute("id","toCartBtn1")
          btn.addEventListener("click",function(){
              addtoCart(item,index,cartArray)
          });
  
          overlayDiv.append(btn);
          Mdiv.append(overlayDiv);
  
          let image = document.createElement("img");
          image.src = item.image_url[0];
          image.onclick = ()=> {
              redirectedProduct(item);
          };
  
          let title = document.createElement("p");
          title.setAttribute("id","nameofprod")
          title.textContent = item.title;
          title.addEventListener("click", function(){
              redirectedProduct(item);
          });
  
          let price = document.createElement("p");
          price.setAttribute("id","priceOf");
          // let disc = 100 * item.discount
          price.textContent = `₹ ${item.price}` ;
          price.addEventListener("click", function(){
              redirectedProduct(item);
          });
  
          let rating = document.createElement("div");
          let ratingtag = document.createElement("p");
          ratingtag.innerHTML = `${item.rating} <i style="font-size:8px" class="fas fa-star"></i>` ;
          rating.setAttribute("id","ratingOf");
          rating.append(ratingtag);
          if(item.rating < 4.0 && item.rating >= 2) rating.style.backgroundColor = "#cdd614";
          if(item.rating < 2.5) rating.style.backgroundColor = "#ff7800"
          rating.addEventListener("click", function(){
              redirectedProduct(item);
          });
  
          Mdiv.append(image, title, price,rating);
          location.append(Mdiv);
  
      })
  }
  
  function addtoCart(item,index,cartArray){
      let toCartItem = item;
      let uniqueId = item.id;
      let count = 0;
      for(let i = 0; i < cartArray.length ; i++){
          if(uniqueId == cartArray[i].id) alert("Item already exists in cart");
          else count++;
      }
      if(count == cartArray.length){
         document.querySelector("#toCartBtn1").innerHTML = "ADDED TO CART";
         cartArray.push(toCartItem);
         localStorage.setItem("cartItems", JSON.stringify(cartArray));
         alert("Item added to cart! Successfully")  
      }   
   }
  
   function redirectedProduct(item){
      let data = item;
      localStorage.setItem("DataIndivi",JSON.stringify(data));
      window.location.href = `/products/${data._id}`
      ;
  }
  