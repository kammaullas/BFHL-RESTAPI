export const sendData = async (data) => {
    const res = await fetch("https://bfhl-restapi.onrender.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data })
    });

    return res.json();
};