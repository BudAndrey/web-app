let url = `http://www.omdbapi.com/?apikey=721d15d3`
let title=document.getElementById('title')
let type=document.getElementById('type')
let resultsCont=document.getElementById('results')
let btn=document.getElementById('btn')

btn.addEventListener('click', function(){
    fetch(clearFunc()).then(x=>x.json())
            .then(res=>{
                if (res.Response=='False'){
                    let card=document.createElement('div')
                    card.classList="alert alert-danger"
                    card.setAttribute("role","alert")
                    card.innerText=res.Error
                    resultsCont.append(card)
                    return
                }
               
                console.log(res);
                CreateElemen(res.Search)
                if (res.totalResults>10){
                   paginationFunc(res.totalResults)
                }
            })
    alert(`ХОНДА - ГАВНО !!!!`)
})

let CreateElemen=function (arr) {
    for (let item of arr){
        let card=document.createElement('div')
        card.classList='card m-3'
        card.style='width: 18rem;'
        let img=document.createElement('img')
        if(item.Poster=="N/A"){
            img.src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
        else{
            img.src=item.Poster
        }
        img.className='card-img-top'
        let cBody=document.createElement('div')
        cBody.classList="card-body"
        let title=document.createElement('h5')
        title.classList='card-title text-center mt-1'
        title.innerText=item.Title
        let p=document.createElement('p')
        p.classList='card-text text-center '
        p.innerHTML=`Year:  <b>${item.Year}</b>`
        let details=document.createElement('a')
        details.classList='btn btn-primary'
        details.innerText='Details'
        details.setAttribute('id',`${item.imdbID}`)
        cBody.append(title,p,details)         
        card.append(img,cBody)
        resultsCont.append(card)
        let detailBtn=document.getElementById(item.imdbID)
        let detailsUrl=url+`&i=${item.imdbID}&plot=full`
        detailBtn.addEventListener('click',()=> detailsFunc(detailsUrl))
    }
}
let paginationFunc=function (result) {
    let pages=result/10
    let nav=document.createElement('nav')
    nav.style="width:90vw;"
    let list=document.createElement('ul')
    list.classList="pagination justify-content-center flex-wrap"
    for (let i=1;i<pages;i++){
        let page=document.createElement('li')
        page.classList="page-item"
        let link=document.createElement('a')
        link.classList='page-link'
        link.innerText=i
        link.setAttribute("id",`${i}`)
        link.setAttribute("Href","#")
        page.append(link)

        list.append(page)
    }
    nav.append(list)
    resultsCont.append(nav)
    pageFunc()
}
let clearFunc=function () {
    while (resultsCont.firstChild ) {
        resultsCont.removeChild(resultsCont.firstChild);
    }
    let tVal=type.options[type.options.selectedIndex].value
    let curUrl = url+`&s=${title.value}&type=${tVal}`
    return curUrl
}

let pageFunc=function () {
    let pageBtns=document.querySelectorAll('.page-link')
    for (let i=0;i<pageBtns.length;i++){
        pageBtns[i].onclick= function () {
            let nextPageUrl=`${clearFunc()}&page=${i+1}`
            fetch(nextPageUrl).then(x=>x.json())
                                .then(res=>{
                                    console.log(res);
                                    CreateElemen(res.Search)
                                    if (res.totalResults>10){
                                         paginationFunc(res.totalResults)
                                    }
                                })
            this.parentElement.classList.add("active")
        }
        
    }
    cont.classList.add("d-none")
}
let cont=document.getElementById('details')
let detailsFunc=function (url) {
    cont.classList.remove("d-none")
    let img=document.getElementById('detailsImg')
    let dTitle=document.getElementById('dTitle')
    let released=document.getElementById('released')
    let genre=document.getElementById('genre')
    let country=document.getElementById('country')
    let director=document.getElementById('director')
    let writer=document.getElementById('writer')
    let actors=document.getElementById('actors')
    let awards=document.getElementById('awards')
    fetch(url).then(x=>x.json())
        .then(res=>{
            console.log(res)
            img.src=res.Poster
            dTitle.innerText=res.Title
            released.innerText=res.Released
            genre.innerText=res.Genre
            country.innerText=res.Country
            director.innerText=res.Director
            writer.innerText=res.Writer
            actors.innerText=res.Actors
            awards.innerText=res.Awards

        })
}


// let imgDiv=document.createElement('div')
//             imgDiv.style="width:40%;"
//             let img=document.createElement('img')
//             img.src=res.Poster
//             imgDiv.append(img)
//             cont.append(imgDiv) 

//             let descrDiv=document.createElement('div')
//             descrDiv.classList="p-3 m-3"
//             let titleDiv=document.createElement('div')
//             let titleSpan1=document.createElement('span')
//             titleSpan1.classList="w-25 m-2"
//             titleSpan1.innerHTML=`<b>Title:</b>`
//             let titleSpan2=document.createElement('span')
//             titleSpan2.classList="w-25 m-2"
//             titleSpan2.innerText=res.Title
//             titleDiv.append(titleSpan1,titleSpan2)
//             descrDiv.append(titleDiv)
//             cont.append(descrDiv)