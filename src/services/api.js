export const mainUrl = 'http://localhost:8080'
// export const mainUrl = 'https://humble-superhero-api.onrender.com'

export async function getHeroes() {
    const res = await fetch(`${mainUrl}/superheroes`)
    return handleFetch(res)
}
export async function addHero(name, power, score) {
    const data = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(
            {
                "name": name,
                "superpower": power,
                "humility score": score
            },
        )
    }
    console.log(data);
    const res = await fetch(`${mainUrl}/superheroes`, data)
    return handleFetch(res)
}

function handleFetch(result) {
    return new Promise((resolve, reject) => {
        try {
            return result.json().then((res) => {
                if (result.status == 200) {
                    return resolve(res)
                }
                return reject(res)
            })
        } catch (error) {
            reject(error)
        }
    })
}
