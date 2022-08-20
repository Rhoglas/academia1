/* Mostra o menu ao clicar no icone hamburguer */
let btn_mobile = document.querySelector("#btn-mobile");
let hamburguer = document.querySelector("#hamburguer");
let nav = document.querySelector("#nav");

btn_mobile.addEventListener("click", () => {
	if (btn_mobile.classList.toggle("active")) {
		nav.classList.toggle("active");
	} else {
		nav.classList.remove("active");
	}
});
/* Mostra o menu ao clicar no icone hamburguer */

/* Esconde os itens de menu ao clicar em um item da lista */
let menuItens = document.querySelectorAll("#menu a");

menuItens.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.returnValue == true) {
			nav.classList.remove("active");
			// carrosel.style.cssText = "display: block";
		}
	});
});
/* Esconde os itens de menu ao clicar em um item da lista */

let info = [
	{
		img: "assets/img/personal-2.jpg",
		nome: "Carla",
		profissao: "Personal Trainer",
		link: "#t",
	},
	{
		img: "assets/img/personal-1.webp",
		nome: "Márcio",
		profissao: "Personal Trainer",
		link: "#t",
	},
	{
		img: "assets/img/personal-3.png",
		nome: "Bruna",
		profissao: "Personal Trainer",
		link: "#t",
	},
];

info.forEach((e) => {
	// console.log(e);
	criarCards(e);
});

function criarCards(e) {
	// console.log(e);
	let container = document.querySelector(".sectCont");

	let card = document.createElement("div");
	let cardImg = document.createElement("img");
	let cardTex = document.createElement("div");
	let cardSpan1 = document.createElement("span");
	let cardH1 = document.createElement("h1");
	let cardH3 = document.createElement("h3");
	let cardSpan2 = document.createElement("span");
	let cardA = document.createElement("a");

	card.classList.add("card");
	cardTex.classList.add("cardText");

	cardImg.src = `${e.img}`;
	cardH1.innerHTML = `${e.nome}`;
	cardH3.innerHTML = `${e.profissao}`;
	cardA.innerHTML = `Saiba mais`;
	cardA.href = `${e.link}`;

	container.appendChild(card);
	card.appendChild(cardImg);
	card.appendChild(cardTex);
	cardTex.appendChild(cardSpan1);
	cardSpan1.appendChild(cardH1);
	cardSpan1.appendChild(cardH3);
	cardTex.appendChild(cardSpan2);
	cardSpan2.appendChild(cardA);

	// console.log(container);
}
