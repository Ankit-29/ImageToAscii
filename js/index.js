const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.parentElement.clientWidth - 40;
canvas.height = canvas.parentElement.clientHeight - 40;

imageToAscii = () => {
    const imgInp = document.querySelector("#image");
    let img = new Image();
    img.src = URL.createObjectURL(imgInp.files[0]);
    array = [];

    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // for (let i = 0; i < ImageData.data.length; i += 4) {
        //     let avg = ImageData.data[i] + ImageData.data[i + 1] + ImageData.data[i + 2];
        //     ImageData.data[i] = avg;
        //     ImageData.data[i + 1] = avg;
        //     ImageData.data[i + 2] = avg;
        //     // array.push(avg);
        // }
        
        str = "";
        for (let i = 0; i < canvas.width; i++) {
            for (let j = 0; j < canvas.height; j++) {
                index = (i + j * canvas.width) * 4;
                let avg = ImageData.data[index] + ImageData.data[index + 1] + ImageData.data[index + 2];
                ImageData.data[index] = avg;
                ImageData.data[index + 1] = avg;
                ImageData.data[index + 2] = avg;
                if(i%canvas.width==0){
                    str += "\n";
                }
                
            }
        }
        // ctx.putImageData(ImageData, 0, 0);
        console.log(ImageData);
    }
}

