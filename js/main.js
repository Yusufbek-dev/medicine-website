const bar = document.querySelector(".head__hamburger");
const nav = document.querySelector(".head__nav");

bar.addEventListener("click", ()=> {
  bar.classList.toggle("active");
  nav.classList.toggle("active")
});

document.querySelectorAll(".head__nav-item").forEach(n => n.addEventListener("click", ()=> {
    bar.classList.remove("active");
    nav.classList.remove("active");
  }));

  const activePage = window.location.pathname;
  const links = document.querySelectorAll(".about-page__left-link").forEach(link => {
    if(link.href.includes(`${activePage}`)) {
      link.classList.add('active');
    }
  } ) 
  
  // link.addEventListener("click", ()=> {
  //   link.classList.toggle("active");
  // })