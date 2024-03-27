const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  
  event.preventDefault();
 
  deferredPrompt = event;

  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {

  butInstall.style.display = 'none';

  deferredPrompt.prompt();

  const choiceResult = await deferredPrompt.userChoice;

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
});
