//requisição
axios.interceptors.request.use(
    function(config){
        console.log("antes da requisição...");
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
);
//respostas
postFetch.interceptors.response.use(
    function(response){
        console.log("antes da resposta...");
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
)