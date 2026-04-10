const movies = [{
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/hqdefault.jpg",
    title: "Growcast #00 | Conheça a Growdev",
    link: "https://www.youtube.com/watch?v=aJ-HZuLcKeA",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/hqdefault.jpg",
    title: "Growcast #01 | As profissões do futuro",
    link: "https://www.youtube.com/watch?v=7OWT3lfHYvE",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/ci1eQGPK89o/hqdefault.jpg",
    title: "Growcast #02 | Como seguir a carreira internacional?",
    link: "https://www.youtube.com/watch?v=ci1eQGPK89o&t=214s",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/hqdefault.jpg",
    title: "Growcast #03 | Superando os desafios da carreira de Dev!",
    link: "https://www.youtube.com/watch?v=WM7pGG7OicQ",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/hqdefault.jpg",
    title: "Growcast #04 | Agile Master: tudo sobre a profissão!",
    link: "https://www.youtube.com/watch?v=2c8VOBZ160Y",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/mxnEm03cYPc/hqdefault.jpg",
    title: "Growcast #05 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "https://www.youtube.com/watch?v=mxnEm03cYPc",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/m7DyR07KrOE/hqdefault.jpg",
    title: "Growcast #06 | Mulheres e inclusão na tecnologia",
    link: "https://www.youtube.com/watch?v=m7DyR07KrOE",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/hqdefault.jpg",
    title: "Growcast #07 | Desenvolvendo profissionais na área de TI",
    link: "https://www.youtube.com/watch?v=vW8G9KPwRL0",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/hqdefault.jpg",
    title: "Growcast #8 | A solução que está transformando o mercado de TI no Brasil",
    link: "https://www.youtube.com/watch?v=_Ut2KqAqPyk",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/dfDgs0Ive2Q/hqdefault.jpg",
    title: "Growcast #9 | Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI.",
    link: "https://www.youtube.com/watch?v=dfDgs0Ive2Q",
    category: "growcast"
},{
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/hqdefault.jpg",
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/watch?v=WKbLXuP9S-c",
    category: "flutter"
},{
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/hqdefault.jpg",
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/watch?v=dJ6y1zMjVXU",
    category: "flutter"
},{
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/hqdefault.jpg",
    title: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/watch?v=8rdJsqUjsGg",
    category: "flutter"
},{
    img: "https://img.youtube.com/vi/C4p_7qBsECw/hqdefault.jpg",
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/watch?v=C4p_7qBsECw",
    category: "flutter"
},{
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/hqdefault.jpg",
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/watch?v=L1pKoMC6hWk",
    category: "flutter"
}]



movies.forEach (movie => { 
    const container = document.getElementById(movie.category);

    const colum = document.createElement ('div')
    colum.classList.add('col-12', 'col-md-4', 'col-xl-3')

    const img = document.createElement('img');
    img.src = movie.img
    img.alt = movie.title
    img.classList.add('img-fluid');

    colum.appendChild(img)
    container.appendChild(colum)
});