export const sendData = async (data) => {
    const res = await fetch("http://localhost:3000/bfhl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data })
    });

    return res.json();
};