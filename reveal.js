

const targets = document.querySelectorAll('.affiche');
const typing = document.getElementById('ontype');
function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (entry.target == typing) {
                entry.target.classList.add('anime')
            }
        }
    });
}
const observer = new IntersectionObserver(handleIntersection);

targets.forEach(target => observer.observe(target));

