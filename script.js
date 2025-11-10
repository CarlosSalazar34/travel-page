// FUNCION PARA AGREGAR EN LA PAGINA :)
function updateInPage(container, object) {
    container.innerHTML += `
    <article class="travel-card">
    <div>
    <img src="${object.image}" alt="img">
    </div>    
    <div>
    <h3>${object.title}</h3>
    <p>${object.price}$</p>
    </div>    
    </article>    
        `;
}     

//OBJETOS DE EJEMPLO, AHI IRIAN LOS OBJETOS DE LA DATA BASE

const cards = [
    {
        title: "Santorini, Grecia",
        price: 1200,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },

    {
        title: "Safari en Kenia",
        price: 2300,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
    },

    {
        title: "Playa de Bali, Indonesia",
        price: 1400,
        image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
    },
    {
        title: "París, Francia",
        price: 1100,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },
    {
        title: "Islas Maldivas",
        price: 2500,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        title: "Nueva York, EE.UU.",
        price: 1300,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/330px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg"
    },
    {
        title: "Tokyo, Japón",
        price: 1600,
        image: "https://images.unsplash.com/photo-1518183214770-9cffbec72538"
    }
];

const container = document.querySelector(".travels-row");

// SE ITERA LA LISTA CON OBJECTOS CARDS Y LUEGO SE PINTAN EN LA PAGINA
cards.forEach(card => {
    updateInPage(container, card)
});

// ACCIÓN PARA SCROLLEAR A LA PAGINA DE VIAJES
document.querySelector(".scroll-btn-travels").addEventListener("click", ()=>{
    document.getElementById("travels").scrollIntoView({behavior: "smooth"})
})