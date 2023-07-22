(function () {
    const video = document.getElementById('video')
    const textVideo = document.getElementById('text-video')
    const canvas = document.getElementById('canvas-video')
    const ctx = canvas.getContext('2d');
    const width = 320 / 2, height = 240 / 2;

    const gradient = "_______.:!/r(l1Z4H9W8$@";
    const density= "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,^`'.";
    const preparedGradient = gradient.replaceAll('_', '\u00A0')
    

    const init = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
            });
    }

    const clearphoto = () => {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, width, height);
    }

    const render = (ctx) => {
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(video, 0, 0, width, height);
        } else {
            clearphoto();
        }
    }

    const getPixelsGreyScale = (ctx) => {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let row = 0
        const res = new Array(height).fill(0).map(() => []);
        for (let i = 0, c = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            let curr = res[row]
            curr.push(avg)
            if (c < width) {
                c++
            }
            if (c === width) {
                c = 0
                row += 1
            }

        }
        return res
    }

    const getCharByScale = (scale) => {
        const val = Math.floor(scale / 255 * (gradient.length - 1))
        return preparedGradient[val]
    }

    const renderText = (node, textDarkScale) => {
        let txt = `<div>`
        for (let i = 0; i < textDarkScale.length; i++) {
            txt += `<span style="color: #fff">`
            for (let k = 0; k < textDarkScale[i].length; k++) {
                txt = `${txt}${getCharByScale(textDarkScale[i][k])}`
            }
            txt += `</span><br>`
        }
        txt += `</div>`
        node.innerHTML = txt
    }

    let running = true;

    init()
    const frame = () => requestAnimationFrame(() => {
        render(ctx)
        const chars = getPixelsGreyScale(ctx)
        renderText(textVideo, chars)
        if (running)
            frame()
    })
    frame()


    document.getElementById('stop').addEventListener('click', (e) => {
        running = false
    })

})()