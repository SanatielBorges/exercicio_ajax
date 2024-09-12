// Obter os elementos para atualizar
const profileAvatar = document.querySelector(".profile-avatar");
const profileName = document.querySelector(".profile-name");
const profileUsername = document.querySelector(".profile-username");
const reposCount = document.querySelector(".numbers-item:nth-child(1) p"); // Seleciona o <p> de repositórios
const followersCount = document.querySelector(".numbers-item:nth-child(2) p"); // Seleciona o <p> de seguidores
const followingCount = document.querySelector(".numbers-item:nth-child(3) p"); // Seleciona o <p> de seguindo
const profileLink = document.querySelector(".profile-link");

// Definir o endpoint da API do GitHub e o nome de usuário
const apiEndpoint = "https://api.github.com/users/SanatielBorges";
const username = "SanatielBorges";

// Fazer a requisição AJAX
const xhr = new XMLHttpRequest();
xhr.open("GET", apiEndpoint, true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const userData = JSON.parse(xhr.responseText);
    // Atualizar os elementos HTML
    profileAvatar.src = userData.avatar_url;
    profileName.textContent = userData.name;
    profileUsername.textContent = userData.login;
    reposCount.textContent = userData.public_repos; // Atualiza o <p> de repositórios
    followersCount.textContent = userData.followers; // Atualiza o <p> de seguidores
    followingCount.textContent = userData.following; // Atualiza o <p> de seguindo
    profileLink.href = userData.html_url;
  }
};
xhr.send();
