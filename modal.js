const showModal = (modalTitle, modalMessage) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const backDrop = document.createElement("div");
    backDrop.classList.add("backDrop");

    const content = document.createElement("div");
    content.classList.add("content");

        const header = document.createElement("div");
        header.classList.add("header");

            const title = document.createElement("h1");
            title.textContent = modalTitle;

            header.appendChild(title);

        const body = document.createElement("div");
        body.classList.add("body");

            const message = document.createElement("p");
            message.innerText = modalMessage;

            body.appendChild(message);

        const footer = document.createElement("div");
        footer.classList.add("footer");

            const btn = document.createElement("button");
            btn.textContent = "Try Again (Enter)";
            btn.addEventListener("click", () => {
                location.reload();
            });

            footer.appendChild(btn);
    
    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);

    modal.appendChild(backDrop);
    modal.appendChild(content);

    document.querySelector("body").appendChild(modal);
}