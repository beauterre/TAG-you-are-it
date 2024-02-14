<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Range Slider with Min and Max Handles</title>
<style>
    .range-container {
        position: relative;
        width: 300px;
        height: 20px;
        margin-bottom: 20px;
    }

    .range-slider {
        width: 100%;
        height: 100%;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        background: #ddd;
        border-radius: 10px;
    }

    .range-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #007bff;
        border-radius: 50%;
        cursor: pointer;
    }

    .range-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: #007bff;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
</head>
<body>

<div class="range-container">
    <input type="range" class="range-slider" min="0" max="100" value="0">
    <input type="range" class="range-slider" min="0" max="100" value="100">
</div>

<script>
    const sliders = document.querySelectorAll('.range-slider');

    sliders.forEach(slider => {
        slider.addEventListener('input', () => {
            const min = parseFloat(sliders[0].value);
            const max = parseFloat(sliders[1].value);

            if (min >= max) {
                if (slider === sliders[0]) {
                    sliders[1].value = min;
                } else {
                    sliders[0].value = max;
                }
            }
        });
    });
</script>

</body>
</html>
