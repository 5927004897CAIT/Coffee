async function getUpcomingEvents() {
    const request = new Request("./scripts/upcoming-events.json");

    const res = fetch(request);
    const response = await (await res).json();

    response.events.forEach((e) => {
        const event = document.createElement("div");
        const header = document.createElement("h3");
        const date = document.createElement("span");
        const description = document.createElement("p");
        const headContainer = document.createElement("div");

        header.innerText = e.name;
        date.innerText = new Date(e.date).getMonth() + 1 + "/" + new Date(e.date).getDate();
        description.innerText = e.description;

        headContainer.appendChild(header);
        headContainer.appendChild(date);
        event.appendChild(headContainer);
        event.appendChild(description);

        document.querySelector("aside").appendChild(event);
    });
}

getUpcomingEvents();