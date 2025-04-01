let currentCut = null;
let imageData = imageMap[currentCut] || { images: [], title: '' };

// Get references to DOM elements
const imageContainer = document.getElementById("image-container");
const cutTitle = document.getElementById("cut-title");
const ul = document.getElementById("cut-links");
let imagesPerRow = 2; // Default number of images per row

// Function to update images based on selected cut
function updateImages(cut_name) {
    imageContainer.innerHTML = "";
    cutTitle.textContent = imageData.title;

    document.querySelectorAll("#cut-nav a").forEach(a => a.classList.remove("active"));
    document.querySelectorAll(`a[data-cut='${cut_name}']`).forEach(a => a.classList.add("active"));

    imageContainer.style.display = "grid";
    imageContainer.style.gridTemplateColumns = `repeat(${imagesPerRow}, 1fr)`;

    imageData = imageMap[cut_name] || { images: [], title: '' };
    console.log(imageData);

    const images = imageData.images.map(file => `${imageData.path}/${file}`);
    images.forEach((img) => {
        const container = document.createElement('div');
        container.className = 'image-container';

        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = img.split('/').pop();
        imgElement.onclick = () => openModal(img); // click to zoom

        const filename = document.createElement('p');
        filename.className = 'filename';
        filename.textContent = img.split('/').pop();

        container.appendChild(imgElement);
        container.appendChild(filename);
        imageContainer.appendChild(container);

    })
}


// Change the images per row based on the mode selected 
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        imagesPerRow = parseInt(btn.textContent);
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateImages(currentCut);
    });
});


const li = document.createElement("li");
Object.keys(cut_config).forEach((cut, index, array) => {
    // Create clickable cut name
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = cut;
    a.dataset.cut = cut;
    a.onclick = () => {
        currentCut = cut;
        updateImages(currentCut);
    }
    a.style.margin = "0 5px"; // Add some spacing

    li.appendChild(a);
});
ul.appendChild(li);

// // Modal Function
function openModal(src) {
    const modal = document.getElementById("image-modal");
    document.getElementById("modal-img").src = src;
    modal.classList.add("show"); // Only add the class now
}

// Close Modal When Clicking Outside Image
document.querySelector(".close").onclick = function () {
    document.getElementById("image-modal").classList.remove("show");
};

document.getElementById("image-modal").onclick = function (event) {
    if (event.target === this) {
        this.classList.remove("show");
    }
};