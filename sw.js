// const cache_name = 'cache-1';

// self.addEventListener('install', evento => {

//     const cache = caches.open(cache_name).then(cache => {
//         return cache.addAll([
//             '/',
//             'index.html',
//             'style.css',
//             'app.js',
//         ])
//     })
//     evento.waitUntil(cache);   
// })

// self.addEventListener('fetch', evento => {
//     const respuesta = fetch(evento.request).then(resNew => { 

//         return caches.open(cache_name).then(cache => {
//             cache.put(evento.request, resNew.clone());
//             return resNew;
//         })
//     }).catch( error => { 
//         console.log(error);
//         return caches.match(evento.request);
//     })
//     evento.respondWith(respuesta);
// })

const CACHE_NAME = 'cache-1';
self.addEventListener('install', function(e){
    const cache = caches.open(CACHE_NAME).then(cache =>{
        return cache.addAll([
            'app.js',
            'index.html',
            'compras.png',
            'style.css'
        ])
    })
    e.waitUntil(cache);
})
self.addEventListener('fetch', e=>{
    const respuestaCache = cache.match(e.request).then(res=>{
        if(res){
            res;
        }else{
            return fetch(e.request)
        }
    })
    e.respondWith(respuestaCache)
})