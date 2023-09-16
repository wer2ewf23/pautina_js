let news = [
    {
        id:1,
        tittle : 'news1',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok',
        name: 'Danis1',
        date: '01.01.2023'
    },
    {
        id:2,
        tittle : 'news2',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok1',
        name: 'Danis2',
        date: '01.01.2023'
    },
    {
        id:3,
        tittle : 'news3',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok2',
        name: 'Danis3',
        date: '01.01.2023'
    },
    {
        id:4,
        tittle : 'news4',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok1',
        name: 'Danis4',
        date: '01.01.2023'
    },
    {
        id:5,
        tittle : 'news5',
        text: 'fghddfghfdghdfghdfghdfghdfghdfghdfgh',
        name: 'Danis5',
        date: '01.01.2023'
    },
]
newsPlace = document.querySelector('.main-case')

for (i= 0; i <= news.length; i++){
    let result = '<div class="news"><div class="flex-first"><h1 class="h1-text">'+news[i].tittle+'</h1><h3 class="data-text">'+news[i].date+'</h3></div><p class="text-news">'+news[i].text+'</p><div class="flex-second"><p>'+news[i].name+'</p><p>'+news[i].id+'</p></div></div>'
    newsPlace.insertAdjacentHTML('beforeend', result)
}


