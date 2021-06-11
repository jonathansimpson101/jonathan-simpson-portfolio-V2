    const card = document.querySelector("#card");
    const phone = document.querySelector(".fa-phone");

    const projects = document.querySelectorAll(".project");

    VanillaTilt.init(document.querySelector(card), {
      easing: "cubic-bezier(.03,.98,.52,.99)",
      "glare-prerender": true,
      perspective: 10
    });

    phone.addEventListener('click', () => {
      alert('Number to Ring: 07814277434')
    })
