import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// event listener for the button
document.getElementById('btnNewest').addEventListener('click', () => {
    console.log('btnNewest clicked')
    if (!document.getElementById('btnNewest').classList.contains('btn--active')) {
        document.getElementById('btnNewest').classList.add('btn--active')
    }
    if (document.getElementById('btnOldest').classList.contains('btn--active')) {
        document.getElementById('btnOldest').classList.remove('btn--active')
    }
    
})

document.getElementById('btnOldest').addEventListener('click', () => {
    console.log('btnOldest clicked')
    if (!document.getElementById('btnOldest').classList.contains('btn--active')) {
        document.getElementById('btnOldest').classList.add('btn--active')
    }
    if (document.getElementById('btnNewest').classList.contains('btn--active')) {
        document.getElementById('btnNewest').classList.remove('btn--active')
    }
    
})
