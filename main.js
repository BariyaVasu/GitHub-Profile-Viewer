async function getProfile() {
    const name = document.getElementById("username").value.trim();
    const profile = document.getElementById("profile");

    if (!name) {
        profile.textContent = "Please Enter Your Github Profile";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${name}`);
        if(!response.ok){
            throw new Error("USer Not Found");
        }
        const data = await response.json();
        console.log(data);

        profile.innerHTML = `
            <p>Login: ${data.login}</p>
            <p>Name: ${data.name || "Name Not Found"}</p>
            <p>Bio: ${data.bio || "Bio Not Found"}</p>
            <p>Location: ${data.location || "Location Not Found"}</p>
            <p>Public Repositories: ${data.public_repos || "Repositories Not Found"}</p>
            <p>Email: ${data.email || "Email Address Not Found"}</p>
            <p>Created At: ${data.created_at}</p>
        `;        
    } catch (err) {
        console.log(err);
    }
}