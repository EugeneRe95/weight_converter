document.getElementById('output').style.visibility = 'hidden';

document.getElementById('valInput').addEventListener('input', function(e) {
  let selectOpt = document.getElementById('selectOption').value;
  let grOutput = document.getElementById('grOutput');
  let lbsOutput = document.getElementById('lbsOutput');
  let kgOutput = document.getElementById('kgOutput');
  let ozOutput = document.getElementById('ozOutput');

  let targetVal = e.target.value;
  document.getElementById('output').style.visibility = 'visible';

  function setBlocks(id, placeholder) {
    document.querySelectorAll('.card-block').forEach((el) => {
      if (el.querySelector('div').getAttribute('id') != id) {
        el.parentElement.style.display = 'block';
        document.getElementById('valInput').setAttribute('placeholder', placeholder);
      } else {
        el.parentElement.style.display = 'none';
      }
    });
  }
  switch (selectOpt) {
    case 'Pounds':
      setBlocks('lbsOutput', 'Enter Pounds...');
      grOutput.innerHTML = targetVal * 453.592;
      kgOutput.innerHTML = targetVal / 2.2046;
      ozOutput.innerHTML = targetVal * 16;
      break;
    case 'Gramms':
      setBlocks('grOutput', 'Enter Gramms...');
      lbsOutput.innerHTML = targetVal / 453.592;
      kgOutput.innerHTML = targetVal / 1000;
      ozOutput.innerHTML = targetVal / 28.35;
      break;
    case 'Killograms':
      setBlocks('kgOutput', 'Enter Killograms...');
      grOutput.innerHTML = targetVal * 1000;
      lbsOutput.innerHTML = targetVal * 2.2046;
      ozOutput.innerHTML = targetVal * 35.274;
      break;
    case 'Ounces':
      setBlocks('ozOutput', 'Enter Ounces...');
      grOutput.innerHTML = targetVal * 28.35;
      kgOutput.innerHTML = targetVal / 35.274;
      lbsOutput.innerHTML = targetVal / 16;
      break;
    default:
  }

});
document.getElementById('selectOption').addEventListener('input', function() {

  let event = new Event("input");
  document.getElementById('valInput').dispatchEvent(event);

});
window.addEventListener('load', () => {
  let val = document.getElementById('selectOption').value;
  document.getElementById('valInput').setAttribute('placeholder', 'Enter ' + val + '...');
});
