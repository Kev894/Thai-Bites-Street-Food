
// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); history.replaceState(null,'',href); }
    }
  });
});


// Formspree AJAX submit
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const success = document.getElementById('form-success');
  const error = document.getElementById('form-error');
  const note = document.getElementById('form-note');

  form.addEventListener('submit', async (e)=>{
    // Only intercept if action contains Formspree endpoint
    if(!form.action.includes('formspree.io')) return;
    e.preventDefault();
    note && (note.style.display='none');
    success && (success.style.display='none');
    error && (error.style.display='none');
    const data = new FormData(form);
    try{
      const res = await fetch(form.action, { method:'POST', body:data, headers: { 'Accept':'application/json' } });
      if(res.ok){
        success && (success.style.display='block');
        form.reset();
      }else{
        error && (error.style.display='block');
      }
    }catch(err){
      error && (error.style.display='block');
    }
  });
})();
