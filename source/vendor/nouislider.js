const handlesSlider = document.getElementById('slider-handles');
const snapValues = [
  document.getElementById('slider-snap-value-lower'),
  document.getElementById('slider-snap-value-upper')
];

noUiSlider.create(handlesSlider, {
    start: [0, 800],
    connect: [false, true, false],
    range: {
        'min': [0],
        'max': [1000]
    },
    step: 1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }
});


handlesSlider.noUiSlider.on('update', function (values, handle) {
  snapValues[handle].value = values[handle];

  if (snapValues[handle].disabled) snapValues[handle].style.color = '#BDBDBD';
  else parseFloat(values[handle]) > 0
      ? snapValues[handle].style.color = '#333333'
      : snapValues[handle].style.color = '';
});
