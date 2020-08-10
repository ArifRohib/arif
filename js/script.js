// portfolio Item Filter

const filterContainer=document.querySelector(".portfolio_filter"),
        filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio_item"),
        totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++) {
filterBtns[i].addEventListener("click",function(){
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue=this.getAttribute("data-filter");
    for(let k=0; k<totalPortfolioItem; k++){
        if(filterValue === portfolioItems[k].getAttribute("data-catagory")){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
        }
        else{
            portfolioItems[k].classList.remove("show");
            portfolioItems[k].classList.add("hide"); 
        }
        if(filterValue==="all"){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
        }
    }

})

}   

//portfolio lightbox
const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox_img"),
        lightboxClose=lightbox.querySelector(".lightbox_close"),
        lightboxText=lightbox.querySelector(".caption_text"),
        lightboxCounter=lightbox.querySelector(".caption_count");
let itemIndex=0;
for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click",function(){
    itemIndex=i;
        changeItem();
    toggleLightbox();
    })
}
function nextItem(){
    if(itemIndex===totalPortfolioItem-1){
        itemIndex=0;  }
    else{
        itemIndex++}
    changeItem();
}


function prevItem(){
    if(itemIndex===0){
        itemIndex=totalPortfolioItem-1;   }
    else{
        itemIndex--
    }
    changeItem();
}


function toggleLightbox(){
    lightbox.classList.toggle("open")
}


function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio_img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;

}

// lightboxClose

lightbox.addEventListener("click",function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
    })


// testimonial slider

const slides=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider_indicator").children;

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click",function(){
      

        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");

          const id=this.getAttribute("data-id");
            for(let j=0; j<slides.length; j++){
                slides[j].classList.remove("active");
            }
          slides[id].classList.add("active");
    })
}
// testimonial slider


// aside navbar
const nav=document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList=navList.length,
        allSection=document.querySelectorAll(".section"),
        totalSection=allSection.length;

        for(i=0; i<totalNavList; i++){
            const a=navList[i].querySelector("a");
            a.addEventListener("click",function(){
            //  remove back section
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
                for(j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                    //    add back section class
                        allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                
                showSection(this);
            })
        }

        function showSection(element){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
            const target=element.getAttribute("href").split("#")[1];
            document.querySelector("#"+target).classList.add("active")
        }




const navToggleBtn=document.querySelector(".nav_toggler"),
aside=document.querySelector(".aside");

navToggleBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
}









