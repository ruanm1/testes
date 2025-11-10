const form = document.querySelector("#form");

const cadSelect = document.querySelector("#sitcad");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const larguraInput = document.querySelector("#largura");
const profundidadeInput = document.querySelector("#profundidade");
const comprimentoInput = document.querySelector("#comprimento");
const espessuraInput = document.querySelector("#espessura");
const pesoInput = document.querySelector("#peso");
const materialInput = document.querySelector("#material");
const corInput = document.querySelector("#cor");
const tampaInput = document.querySelector("#tampa");
const dobradicaInput = document.querySelector("#personalização");
const rodinhaInput = document.querySelector("#finalidade");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (cadSelect && cadSelect.value === "") return alert("Por favor, escolha uma situação de login!");
    if (nameInput && nameInput.value.trim() === "") return alert("Por favor, preencha o seu nome");
    if (emailInput && emailInput.value.trim() === "") return alert("Por favor, preencha o seu e-mail");
    if (passwordInput && (passwordInput.value.trim() === "" || passwordInput.value.length < 8)) return alert("A senha precisa ter no mínimo 8 dígitos");

    if (larguraInput && larguraInput.value.trim() === "") return alert("Por favor, preencha a largura da caixa.");
    if (profundidadeInput && profundidadeInput.value.trim() === "") return alert("Por favor, preencha a profundidade da caixa.");
    if (comprimentoInput && comprimentoInput.value.trim() === "") return alert("Por favor, preencha o comprimento da caixa.");
    if (espessuraInput && espessuraInput.value.trim() === "") return alert("Por favor, preencha a espessura da caixa.");
    if (pesoInput && larguraInput.value.trim() === "") return alert("Por favor, preencha o peso da caixa.");
    if (materialInput && materialInput.value.trim() === "") return alert("Por favor, informe o tipo de material da caixa.");
    if (corInput && corInput.value.trim() === "") return alert("Por favor, informe a cor ou acabamento desejado.");
    if (tampaInput && tampaInput.value.trim() === "") return alert("Por favor, informe se a caixa terá tampa.");
    if (dobradicaInput && dobradicaInput.value.trim() === "") return alert("Por favor, informe se deseja dobradiça.");
    if (rodinhaInput && rodinhaInput.value.trim() === "") return alert("Por favor, informe se deseja rodinha.");

    form.submit();
});
