import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArticleIcon from '@mui/icons-material/Article';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExtensionIcon from '@mui/icons-material/Extension';


export const SidebarData = [
    
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },
    {
        title: "Ver piezas",
        icon: <ConstructionIcon/>,
        link: "/verpiezas"
    },
    {
        title: "Ver Solicitudes",
        icon: <ArticleIcon/>,
        link: "/solicitudesManager"
    },

    
    {
        title: "Crear solicitud",
        icon: <PostAddIcon/>,
        link: "/formsolicitud"
    },
       
    {
        title: "Simulaciones",
        icon: <ExtensionIcon/>,
        link: "/VerSimulaciones"
    },

    {
        title: "Aceptar simulaciones",
        icon: <ExtensionIcon/>,
        link: "/aceptarSimulaciones"
    },
]

