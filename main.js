// If a local image is missing, fall back to the original Google Sites image URL.
document.querySelectorAll('img[data-fb]').forEach(function(i){
  i.addEventListener('error',function(){var f=i.dataset.fb;if(f&&i.src!==f){i.src=f;i.removeAttribute('data-fb');}});
});
