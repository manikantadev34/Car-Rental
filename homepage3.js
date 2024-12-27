let get_fc_cont=document.getElementById("fc_cont");
let fc_arr=[
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_XUV_300.jpg",make:"Mahendra",model:"TUV 300"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Ford_Ecosport.jpg",make:"Ford",model:"EcoSport"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_Scorpio.jpg",make:"Mahendra",model:"Scorpio"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_KUV_100.jpg",make:"Mahendra",model:"KUV 100"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Swift.jpg",make:"Maruti",model:"Swift"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Suzuki_S_Cross.jpg",make:"Suzuki",model:"S-Cross"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_XUV_500.jpg",make:"Mahendra",model:"XUV 500"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Etios_Liva.jpg",make:"Toyato",model:"Etios Liva"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Innova_Crysta.jpg",make:"Toyato",model:"Innova Crysta"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_Xcent.jpg",make:"Hyundai",model:"Xcent"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Swift_Dzire.jpg",make:"Maruti",model:"Swift Dzire"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Etios.jpg",make:"Toyato",model:"Etios"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_Elite_i20.jpg",make:"Hyndai",model:"Elite i20"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_Creta.jpg",make:"Hyundai",model:"Creta"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Ciaz.jpg",make:"Maruti",model:"Ciaz"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/180813023859.jpg",make:"Hyundai",model:"Grand i10"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Honda_City.jpg",make:"Honda",model:"City"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Honda_Amaze.jpg",make:"Honda",model:"Amaze"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Ford_Figo_Aspire.jpg",make:"Ford",model:"Figo Aspire"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Baleno.jpg",make:"Maruti",model:"Baleno"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Ertiga_Hybrid.jpg",make:"Maruti",model:"Etriga"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Vitara_Brezza.jpg",make:"Maruti",model:"Vitara Brezza"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Fortuner.jpg",make:"Toyato",model:"Fortuner"},
{image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_i20.jpg",make:"Hyundai",model:"i20"}
]


for(i in fc_arr){
    let car=fc_arr[i];

    let divEle=document.createElement("div");
    get_fc_cont.appendChild(divEle);
    divEle.classList.add("f_card")

    let imgEle=document.createElement("img");
    divEle.appendChild(imgEle);
    imgEle.setAttribute("src",car.image);
    imgEle.classList.add("f_img")

    let para1=document.createElement("p");
    divEle.appendChild(para1);
    para1.classList.add("f_texts");
    para1.classList.add("text")
    para1.textContent=`Make: ${car.make}`; 

    let para2=document.createElement("p");
    divEle.appendChild(para2);
    para2.classList.add("f_texts");
    para2.classList.add("text");
    para2.style.marginTop="-10px";
    para2.textContent=`Make: ${car.model}`; 
}