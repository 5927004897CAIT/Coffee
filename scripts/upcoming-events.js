async function getUpcomingEvents() {
    const request = new Request("./upcoming-events.json", {
        method: "GET"
    });

    const res = fetch(request);
    const response = await res.json();
}