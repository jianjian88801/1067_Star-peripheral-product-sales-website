const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot60m3k/",
            name: "springboot60m3k",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot60m3k/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "星之语明星周边产品销售网站"
        } 
    }
}
export default base
