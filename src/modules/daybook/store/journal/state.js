//Es reactivo y desde aquí notificamos a todos los componentes a varios lugares donde esten escuchando los cambios de nuestro state
export default()=>({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text:'En Vue, los archivos procesados en modalidad de desarrollo (npm run serve) se almacenan directamente en memoria,',
            picture:null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text:'En Vue, encontraremos siempre un fichero main.ts (TypeScript) o main.js (Javascript).',
            picture:null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text:'Por ejemplo, en el caso de estar utilizando TypeScript o Sass, en src/ encontrarás ficheros ',
            picture:null
        }
    ]

})