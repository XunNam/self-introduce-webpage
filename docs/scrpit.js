// Dark mode Disable
const darkMode = document.getElementById('darkmode');
darkMode.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
    }
});

const darkModeDarkIcon = document.getElementById('darkModeDarkIcon');
const darkModeLightIcon = document.getElementById('darkModeLightIcon');
const lightModeDarkIcon = document.getElementById('lightModeDarkIcon');
const lightModeLightIcon = document.getElementById('lightModeLightIcon');

darkMode.addEventListener('change', function(){
    if(this.checked) {
        darkModeLightIcon.classList.add('hidden');
        lightModeLightIcon.classList.add('hidden');
        darkModeDarkIcon.classList.remove('hidden');
        lightModeDarkIcon.classList.remove('hidden');
    } else {
        darkModeLightIcon.classList.remove('hidden');
        lightModeLightIcon.classList.remove('hidden');
        darkModeDarkIcon.classList.add('hidden');
        lightModeDarkIcon.classList.add('hidden');
    }
});

//Background
const backGround = document.getElementById('backGround');
darkMode.addEventListener('change', function(){
    if(this.checked) {
        backGround.classList.remove('bg-github-dark', 'bg-opacity-40', 'backdrop-blur-2xl');
        backGround.classList.add('bg-[#fff5ee]');
        //backGround.classList.add('bg-white')
    } else {
        backGround.classList.add('bg-github-dark', 'bg-opacity-40', 'backdrop-blur-2xl');
        backGround.classList.remove('bg-[#fff5ee]');
        //backGround.classList.remove('bg-white');
    }
});