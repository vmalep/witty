/**
 * Return a random gif from the list, filtered on the category number if any
 * @param {integer} category 
 * @returns {object}
 */
function GetRandomGif(category) {

    const gifList = [
        {
            gifName: "rightAnswer1",
            category: 'right',
            src: "https://c.tenor.com/x8eBbUiF4RYAAAAM/yes-sweet.gif"
        },
        {
            gifName: "rightAnswer2",
            category: 'right',
            src: "https://c.tenor.com/0Lo8FNug8K8AAAAM/big-fat-yes-david-walliams.gif"
        },
        {
            gifName: "rightAnswer3",
            category: 'right',
            src: "https://www.icegif.com/wp-content/uploads/icegif-802.gif"
        },
        {
            gifName: "rightAnswer4",
            category: 'right',
            src: "https://www.icegif.com/wp-content/uploads/icegif-802.gif"
        },
        {
            gifName: "rightAnswer5",
            category: 'right',
            src: "https://thumbs.gfycat.com/UnrulyVigorousFlea-max-1mb.gif"
        },
        {
            gifName: "rightAnswer6",
            category: 'right',
            src: "https://c.tenor.com/cnBtMqNDAYYAAAAd/soccer-celebration.gif"
        },
        {
            gifName: "rightAnswer7",
            category: 'right',
            src: "https://c.tenor.com/MZkqMgAe_qoAAAAC/thinkaboutit-smart.gif"
        },
        {
            gifName: "rightAnswer8",
            category: 'right',
            src: "https://c.tenor.com/MZkqMgAe_qoAAAAC/thinkaboutit-smart.gif"
        },

        {
            gifName: "rightAnswer9",
            category: 'right',
            src: "https://c.tenor.com/Yjx_r38x1aYAAAAd/mind-blown-explosion.gif"
        },

        {
            gifName: "rightAnswer10",
            category: 'right',
            src: "https://c.tenor.com/gZrwunYbHMIAAAAC/dj-khaled-you-smart.gif"
        },

        {
            gifName: "rightAnswer11",
            category: 'right',
            src: "https://c.tenor.com/XZM_-G8tYHQAAAAC/dj-khalid-you-very-smart.gif"
        },
        {
            gifName: "rightAnswer12",
            category: 'right',
            src: "https://i.pinimg.com/originals/48/af/d0/48afd0510b98ad1202daaee5bf28bc4c.gif"
        },
        {
            gifName: "rightAnswer13",
            category: 'right',
            src: "https://c.tenor.com/YQ-_EJYMWwwAAAAC/asho-mona-lisa.gif"
        },
        {
            gifName: "rightAnswer14",
            category: 'right',
            src: "https://collectiveidea.com/assets/fangirl.gif"
        },
        {
            gifName: "rightAnswer15",
            category: 'right',
            src: "https://c.tenor.com/5jhgWjY5P4MAAAAC/wedding-crashers-will-ferrell.gif"
        },
        {
            gifName: "rightAnswer16",
            category: 'right',
            src: "https://prd-cam-website-statics.s3.eu-west-1.amazonaws.com/content/uploads/2020/02/dab.gif"
        },
        {
            gifName: "rightAnswer17",
            category: 'right',
            src: "https://vl-media.fr/wp-content/uploads/2018/04/gif-champagne.gif"
        },
        {
            gifName: "rightAnswer18",
            category: 'right',
            src: "https://c.tenor.com/_Hc6tLWkshEAAAAC/win-winner.gif"
        },
        {
            gifName: "rightAnswer19",
            category: 'right',
            src: "https://media2.giphy.com/media/lnyPptAfGwHeTdoQDk/200w.gif"
        },
        {
            gifName: "wrongAnswer1",
            category: 'wrong',
            src: "https://c.tenor.com/3ayn3OdfbTsAAAAC/no-nope.gif"
        },
        {
            gifName: "wrongAnswer2",
            category: 'wrong',
            src: "https://c.tenor.com/1FR4o42djy8AAAAM/spiderman-magic.gif"
        },
        {
            gifName: "wrongAnswer3",
            category: 'wrong',
            src: "https://thumbs.gfycat.com/BossyDarlingAntlion-size_restricted.gif"
        },
        {
            gifName: "wrongAnswer4",
            category: 'wrong',
            src: "https://64.media.tumblr.com/d38b92bc35efabc54891da869d506a97/tumblr_pt8n68Pt3J1tda1h2o1_500.gifv"
        },
        {
            gifName: "wrongAnswer5",
            category: 'wrong',
            src: "https://64.media.tumblr.com/d38b92bc35efabc54891da869d506a97/tumblr_pt8n68Pt3J1tda1h2o1_500.gifv"
        },
        {
            gifName: "wrongAnswer6",
            category: 'wrong',
            src: "http://up.54fcnr.com/pic_source/a6/52/81/a65281d173e815f9dfc09618e5ec1843.gif"
        },
        {
            gifName: "wrongAnswer7",
            category: 'wrong',
            src: "https://c.tenor.com/h-fQB_FC578AAAAC/shannon-sharpe-shay.gif"
        },
        {
            gifName: "wrongAnswer8",
            category: 'wrong',
            src: "https://c.tenor.com/vNlg2Vy0tQsAAAAC/punch-self-own.gif"
        },
        {
            gifName: "wrongAnswer9",
            category: 'wrong',
            src: "https://c.tenor.com/FIZ7_O8GWtUAAAAM/golf-fail.gif"
        },
        {
            gifName: "wrongAnswer10",
            category: 'wrong',
            src: "https://c.tenor.com/fASOJqNZBc8AAAAC/kanye-west.gif"
        },
        {
            gifName: "wrongAnswer11",
            category: 'wrong',
            src: "https://media4.giphy.com/media/cr9vIO7NsP5cY/giphy.gif"
        },
        {
            gifName: "wrongAnswer12",
            category: 'wrong',
            src: "https://c.tenor.com/gsBilnF97T0AAAAC/fail.gif"
        },
        {
            gifName: "wrongAnswer13",
            category: 'wrong',
            src: "https://i.pinimg.com/originals/9e/db/3f/9edb3f6a282f13de6579fc4df77172ae.gif"
        },
        {
            gifName: "wrongAnswer14",
            category: 'wrong',
            src: "http://media0.giphy.com/media/3oEjHVtFOfQKzqG8ms/giphy.gif"
        },
        {
            gifName: "wrongAnswer15",
            category: 'wrong',
            src: "https://c.tenor.com/y1wvJBxX4YYAAAAC/camilacabello-false.gif"
        },
        {
            gifName: "wrongAnswer16",
            category: 'wrong',
            src: "https://providencerules.files.wordpress.com/2017/04/false.gif"
        },
        {
            gifName: "wrongAnswer17",
            category: 'wrong',
            src: "https://c.tenor.com/kpicMSlAEp8AAAAC/gordon-ramsay-no.gif"
        },
        {
            gifName: "wrongAnswer18",
            category: 'wrong',
            src: "https://c.tenor.com/RvWIf6kYd0oAAAAC/thumbs-down-you.gif"
        },
        {
            gifName: "wrongAnswer19",
            category: 'wrong',
            src: "https://gifburg.com/images/gifs/crying/gifs/0004.gif"
        },
        {
            gifName: "wrongAnswer20",
            category: 'wrong',
            src: "https://thumbs.gfycat.com/MaleAjarFalcon-max-1mb.gif"
        },
        {
            gifName: "waitingAnswer1",
            category: 'waiting',
            src: "https://thumbs.gfycat.com/FearlessSourHornet-size_restricted.gif"
        },
        {
            gifName: "waitingAnswer2",
            category: 'waiting',
            src: "https://c.tenor.com/rec5dlPBK2cAAAAd/mr-bean-waiting.gif"
        },
        {
            gifName: "waitingAnswer3",
            category: 'waiting',
            src: "https://1.bp.blogspot.com/-Z5bVLbk1S4E/YBAHtvw1L8I/AAAAAAAADu0/FISEO_pE2v0uat3jaCsGqnrU8OTYpJvgACLcBGAsYHQ/s281/waiting%2Bgif2.gif"
        },
        {
            gifName: "waitingAnswer4",
            category: 'waiting',
            src: "https://24.media.tumblr.com/6e24ba11246bcf18b2c0dfb61226060d/tumblr_mqx9t4UUy71ran7b9o1_500.gif"
        },

        {
            gifName: "waitingAnswer5",
            category: 'waiting',
            src: "https://c.tenor.com/_YhNCtLj-O0AAAAM/grandma-84years.gif"
        },
        {
            gifName: "waitingAnswer6",
            category: 'waiting',
            src: "https://thumbs.gfycat.com/AccurateUnitedCowrie-max-1mb.gif"
        },
        {
            gifName: "waitingAnswer7",
            category: 'waiting',
            src: "https://media1.giphy.com/media/3o7TKTDn976rzVgky4/200.gif"
        },
        {
            gifName: "waitingAnswer8",
            category: 'waiting',
            src: " https://i.pinimg.com/originals/b2/28/13/b228138ca189b63989d295492e8a8b16.gif"
        },
       
         
    ]

    const catGif = category.length !== ""
        ? gifList.filter(element => element.category === category)
        : gifList

    return catGif[Math.floor(Math.random() * catGif.length)]
}

export default GetRandomGif