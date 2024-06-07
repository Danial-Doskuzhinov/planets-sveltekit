export async function load({fetch}) {
    const res = await fetch('/api/v1');
    const planets = await res.json();
    return { planets };
}
