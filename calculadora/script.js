/* =========================================================
   Richard.dev — Scripts
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* 1. Ano atual no rodapé */
  const anoEl = document.getElementById("ano");

  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  /* 2. Foto de perfil */
  const avatar = document.getElementById("avatar");
  const foto = avatar ? avatar.querySelector("img") : null;

  if (foto) {
    foto.addEventListener("error", () => {
      console.error("Não foi possível carregar a foto:", foto.src);
      foto.style.display = "none";
    });

    foto.addEventListener("load", () => {
      console.log("Foto de perfil carregada com sucesso!");
      foto.style.display = "block";
    });

    // Verifica se a imagem já foi carregada
    if (foto.complete && foto.naturalWidth > 0) {
      foto.style.display = "block";
    }
  }

  /* 3. Animação de entrada das seções ao rolar */
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => revealObserver.observe(el));

  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* 4. Destaca no menu a seção que está na tela */
  const navButtons = document.querySelectorAll(".btn--nav");

  const sections = ["projetos", "sobre", "contato"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navButtons.forEach((btn) => {
              btn.classList.toggle(
                "is-active",
                btn.dataset.section === entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* 5. Ao chegar no topo, limpa o destaque do menu */
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY < 200) {
        navButtons.forEach((btn) => {
          btn.classList.remove("is-active");
        });
      }
    },
    { passive: true }
  );

});