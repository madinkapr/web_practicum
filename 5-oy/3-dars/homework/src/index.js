import { fileURLToPath } from "node:url"
import * as path from "node:path"
import express from "express"
import ejs from 'ejs'

const PORT = Number(process.env.PORT || 3e3)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const features = [
    {
        icon: "icon fa-gem",
        title: "Portitor ullamcorper",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Paliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        icon: "icon solid fa-paper-plane",
        title: "Sapien veroeros",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Paliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        icon: "icon solid fa-rocket",
        title: "Quam lorem ipsum",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Paliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        icon: "icon solid fa-signal",
        title: "Sed magna finibus",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Paliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    }
]

const posts = [
    {
        imgUrl: "/images/pic01.jpg",
        title: "Interdum aenean",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        imgUrl: "/images/pic02.jpg",
        title: "Nulla amet dolore",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        imgUrl: "/images/pic03.jpg",
        title: "Tempus ullamcorper",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        imgUrl: "/images/pic04.jpg",
        title: "Sed etiam facilis",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        imgUrl: "/images/pic05.jpg",
        title: "Feugiat lorem aenean",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
    {
        imgUrl: "/images/pic06.jpg",
        title: "Amet varius aliqua",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
    },
]

const miniPosts = [
    {
        imgUrl: "/images/pic07.jpg",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
    },
    {
        imgUrl: "/images/pic08.jpg",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
    },
    {
        imgUrl: "/images/pic09.jpg",
        text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
    }
]

const contentsCol6 = [
    {
        title: "Sem turpis amet semper",
        text: "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan."
    },
    {
        title: "Magna odio tempus commodo",
        text: "In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac									integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mieu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan."
    }
]

const contentsCol4 = [
    {
        title: "Interdum sapien gravida",
        text: "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan."
    },
    {
        title: "Faucibus consequat lorem",
        text: "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan."
    },
    {
        title: "Accumsan montes viverra",
        text: "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan."
    }

]
const definitions = [
    {
        title: "Item1",
        text: "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor."
    },
    {
        title: "Item2",
        text: "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor."
    },
    {
        title: "Item3",
        text: "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor."
    }
]

const tables = [
    {
        name: "Item1",
        decription: "Ante turpis integer aliquet porttitor.",
        price: 29.99
    },
    {
        name: "Item2",
        decription: "Vis ac commodo adipiscing arcu aliquet.",
        price: 19.99
    },
    {
        name: "Item3",
        decription: "Morbi faucibus arcu accumsan lorem.",
        price: 29.99
    },
    {
        name: "Item4",
        decription: "Vitae integer tempus condimentum.",
        price: 19.99
    },
    {
        name: "Item5",
        decription: "Ante turpis integer aliquet porttitor.",
        price: 29.99
    }
]

let sum = 0
for (let item of tables) {
    sum += item.price
}

const images = [
    {
        imgUrl: "/images/pic01.jpg"
    },
    {
        imgUrl: "/images/pic02.jpg"
    },
    {
        imgUrl: "/images/pic03.jpg"
    },
    {
        imgUrl: "/images/pic03.jpg"
    },
    {
        imgUrl: "/images/pic01.jpg"
    },
    {
        imgUrl: "/images/pic02.jpg"
    },
    {
        imgUrl: "/images/pic02.jpg"
    },
    {
        imgUrl: "/images/pic03.jpg"
    },
    {
        imgUrl: "/images/pic01.jpg"
    }

]

const leftRight = [
    {
        imgUrl: "/images/pic01.jpg",
        text: "Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.",
        side: 'left'
    },
     {
        imgUrl: "/images/pic02.jpg",
        text: "Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.",
        side: 'right'
    }
]

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")))

app.engine("html", ejs.renderFile)
app.set('view engine', 'html')
app.set("views", path.join(__dirname, "views"))

app.get('/', (_, res) => res.render("index", { features, posts, miniPosts }))
app.get('/elements', (_, res) => res.render("elements", { miniPosts, contentsCol6, contentsCol4, definitions, tables, sum, images, leftRight }))
app.get('/generic', (_, res) => res.render("generic", { miniPosts }))


app.listen(PORT, () => console.info(`Server running on port ${PORT}`))