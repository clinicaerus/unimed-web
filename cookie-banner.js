/* UNIMED Cookie Banner — RGPD compliant */
(function() {
  if (localStorage.getItem('unimed_cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'unimed-cookie-banner';
  banner.innerHTML = `
    <div style="
      position:fixed;bottom:0;left:0;right:0;z-index:9999;
      background:#1a0f24;color:rgba(255,255,255,.85);
      padding:1.2rem 2rem;
      display:flex;align-items:center;justify-content:space-between;
      gap:1.5rem;flex-wrap:wrap;
      border-top:3px solid #e8356d;
      font-family:'Inter',system-ui,sans-serif;font-size:.8rem;font-weight:300;line-height:1.6;
      box-shadow:0 -4px 24px rgba(0,0,0,.3)
    ">
      <p style="margin:0;max-width:680px">
        Usamos cookies técnicas necesarias para el funcionamiento del sitio y para guardar tus preferencias. 
        Este sitio maneja datos de salud — tu privacidad es nuestra prioridad. 
        <a href="/politica-de-cookies.html" style="color:#f07098;text-decoration:underline">Política de Cookies</a> · 
        <a href="/politica-de-privacidad.html" style="color:#f07098;text-decoration:underline">Política de Privacidad</a>
      </p>
      <div style="display:flex;gap:.7rem;flex-shrink:0">
        <button id="unimed-cookie-reject" style="
          font-family:inherit;font-size:.78rem;font-weight:400;
          padding:.5rem 1.1rem;border-radius:6px;cursor:pointer;
          background:transparent;color:rgba(255,255,255,.5);
          border:1px solid rgba(255,255,255,.15);transition:all .2s
        ">Solo necesarias</button>
        <button id="unimed-cookie-accept" style="
          font-family:inherit;font-size:.78rem;font-weight:500;
          padding:.5rem 1.4rem;border-radius:6px;cursor:pointer;
          background:#e8356d;color:#fff;border:none;
          box-shadow:0 2px 8px rgba(232,53,109,.4);transition:all .2s
        ">Aceptar</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('unimed-cookie-accept').addEventListener('click', function() {
    localStorage.setItem('unimed_cookie_consent', 'accepted');
    banner.remove();
  });

  document.getElementById('unimed-cookie-reject').addEventListener('click', function() {
    localStorage.setItem('unimed_cookie_consent', 'necessary');
    banner.remove();
  });
})();
