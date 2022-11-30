export const setAuthToken = user =>{
    const currentUser ={
        email: user.email
    }
    fetch('https://volunteer-network-server-diptapal.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('volunteer-token', data.token)
    })
}