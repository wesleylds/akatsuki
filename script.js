
        // Obtém o elemento do submenu
        const submenu = document.getElementById("submenu");

        // Obtém o elemento do link "Personagens"
        const linkPersonagens = document.querySelector("#menu a[href='akatsuki.html']");

        // Adiciona o evento de mouseover ao link "Personagens"
        linkPersonagens.addEventListener("mouseover", () => {
            // Exibe o submenu ao passar o mouse sobre o link "Personagens"
            submenu.style.display = "block";
        });

        // Adiciona o evento de mouseout ao submenu
        submenu.addEventListener("mouseout", (event) => {
            // Verifica se o mouse saiu do submenu
            if (!submenu.contains(event.relatedTarget)) {
                // Oculta o submenu apenas se o mouse não estiver sobre nenhum elemento filho do submenu
                submenu.style.display = "none";
            }
        });