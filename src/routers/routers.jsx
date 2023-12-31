import Container from "../components/Container";
import AssideCenter from "../Center/AssideCenter";
// import Business from '../Business';
import Health from "../categories/Health";
import ReadNews from "../readNews/ReadNews";
import World from "../categories/World";
import Sports from "../categories/Sports";
import Science from "../categories/Science";
import Politics from "../categories/Politics";
import Technology from "../categories/Technology";
import Economy from "../categories/Economy";
import Entertainment from "../categories/Entertainment";
import Environment from "../categories/Environment";
import Yazar from "../Yazar";

// // import Filter from "../Filter";
// import Okay from "../Okay";
import Culture from '../categories/Culture';
import Login from "../Login";



const routers = [
    
     {
        path: '/',
        name: 'Login',
        element: <Login/>,
        isAdmin: true
    },

    

    {

        path: '/Aster',
        name: 'Aster',
        element: <Container><AssideCenter/></Container>,
        isAdmin: true
    },




{

    path: '/world',
    name: 'world',
    element: <Container><World/></Container>,
    isAdmin: true
},

// {

//     path: '/economy',
//     name: 'Home',
//     element: <Container><div style={{width: "70%"}}>Ekonomiya budu?</div></Container>,
//     isAdmin: true
// },


// {

//     path: '/politics',
//     name: 'around',
//     element: <Container><Business/></Container>,
//     isAdmin: true
// },
{

    path: "/health",
    name: 'health',
    element: <Container>< Health/></Container>,
    isAdmin: true
},
// {

//     path: '/science',
//     name: 'Home',
//     element: <Container><div style={{width: "70%"}}>Covid19</div></Container>,
//     isAdmin: true
// },
{

    path: '/entertainment',
    name: 'entertainment',
    element: <Container><Entertainment/></Container>,
    isAdmin: true
},
{

    path: '/sports',
    name: 'sports',
    element: <Container><Sports/></Container>,
    isAdmin: true
},
{

    path: "/culture",
    name: 'culture',
    element: <Container><Culture/></Container>,
    isAdmin: true
},
// {

//     path: '/technology',
//     name: 'around',
//     element: <Container><div style={{width: "70%"}}>Notification</div></Container>,
//     isAdmin: true
// },
{

    path: "/environment",
    name: 'environment',
    element: <Container><Environment/></Container>,
    isAdmin: true
},
{

    path: "/settings",
    name: 'settings',
    element: <Container><div style={{width: "70%"}}>Settings</div></Container>,
    isAdmin: true
},

{

    path: '/topstories/follow',
    name: 'Follow',
    element: <Container><div style={{width: "70%"}}>follow</div></Container>,
    isAdmin: true
},

{

    path: '/business/Share',
    name: 'Share',
    element: <Container><div style={{width: "70%"}}>Share</div></Container>,
    isAdmin: true
},
{

    path: '/news/:slug',
    name: 'News',
    element: <Container><ReadNews/></Container>,
    isAdmin: true
},

{

    path: '/science',
    name: 'science',
    element: <Container><Science/></Container>,
    isAdmin: true
},

{

    path: '/politics',
    name: 'politics',
    element: <Container><Politics/></Container>,
    isAdmin: true
},

{

    path: '/technology',
    name: 'technology',
    element: <Container><Technology/></Container>,
    isAdmin: true
},

{

    path: '/economy',
    name: 'economy',
    element: <Container><Economy/></Container>,
    isAdmin: true
},

{

    path:"/author-news/:slug",
    name: 'author',
    element: <Container><Yazar/></Container>,
    isAdmin: true
},

// {

//     path: '/okay',
//     name: 'Share',
//     element: <Container><Okay/></Container>,
//     isAdmin: true
// },




]; 



export default routers;



