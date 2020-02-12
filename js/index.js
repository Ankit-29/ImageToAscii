const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.parentElement.clientWidth - 40;
canvas.height = canvas.parentElement.clientHeight - 40;

imageToAscii = () => {
    const imgInp = document.querySelector("#image");
    let img = new Image();
    img.src = URL.createObjectURL(imgInp.files[0]);
    img.onload = function () {
        ctx.filter = 'grayscale(100%)';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < ImageData.data.length; i += 4) {
            // ImageData.data[i] = 0;
            // ImageData.data[i + 1] = 0;
            // ImageData.data[i + 2] = 0;

        }
        ctx.putImageData(ImageData, 0, 0);
        console.log(ImageData);
    }
}

