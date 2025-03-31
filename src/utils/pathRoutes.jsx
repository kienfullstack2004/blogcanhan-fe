import Admin from "@/containers/pages/private/Admin/Admin"
import Home from "@/containers/pages/public/Home/Home"
import Login from "@/containers/pages/public/Admin/Login"
import Post from "@/containers/pages/public/Post/Post"
import Person from "@/containers/pages/public/Person/Person"
import PostAdmin from "@/containers/pages/private/PostAdmin/Post"
// import Account from "@/containers/pages/private/Account/Account"
import CreatePost from "@/containers/pages/private/CreatePost/CreatePost"
import PostUpdate from "@/containers/pages/private/Update/PostUpdate"
import Active from "@/containers/pages/public/Active/Active"
import DeleteActive from "@/containers/pages/public/CreateActive/CreateActive"
import Detail from "@/containers/pages/public/Detail/Detail"
import Search from "@/containers/pages/public/Search/Search"

export const privateRoutes = [
    {
        path:'',component:Admin
    },
    {
        path:'bai-viet',component:PostAdmin
    },
    {
        path:'bai-viet/create',component:CreatePost
    },
    {
        path:'bai-viet/edit/:id',component:PostUpdate
    },
    {
        path:'hoat-dong',component:Active
    },
    {
        path:'hoat-dong/banner',component:DeleteActive
    },

]

export const publicRoutes = [
    {
        path:'',component:Home,
    },
    {
        path:'bai-viet',component:Post
    },
    {
        path:'detail/:id',component:Detail
    },
    {
        path:'search/:id',component:Search
    },
    
]

export const authRoutes = [
    {
        path:'login',component:Login
    },
   
]
