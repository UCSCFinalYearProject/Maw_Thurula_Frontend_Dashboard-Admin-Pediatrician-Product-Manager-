import Loadable from 'app/components/Loadable';
import {lazy} from 'react';
import {authRoles} from "../../../auth/authRoles";
import OneAstrologerReport from "./astrologers/OneAstrologerReport";
import OneNameProviderReport from "./name-providers/OneNameProviderReport";
import AdminDashboard from "./AdminDashboard";
import MotherfullPosts from "./mothers/component/ViewFullPost";
import MothersRequestList from "./mothers/MothersRequestPostView";

const Analytics = Loadable(lazy(() => import('../../dashboard/Analytics')));
// const AdminDashboard = Loadable(lazy(() => import('../../Actors/admin/AdminDashboard')));
//this for mother's routes
const MothersList = Loadable(lazy(() => import('./mothers/MothersList')));
const Adminblock = Loadable(lazy(() => import('./mothers/Adminblock')));
const Loadingpage = Loadable(lazy(() => import('./Loadingpage')));
const MothersPostRequests = Loadable(lazy(() => import('./mothers/MothersPostRequests')));
const OneMothersDetails = Loadable(lazy(() => import('./mothers/MothersSinglePostView')));
const TargetMothersPostList = Loadable(lazy(() => import('./mothers/MothersPostList')));

//this for pediatrician routes
// const PediatricianList = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianList')));
const PediatricianList = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianListNew')));
const PediatricianArticles = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianArticles.js')));
const PediatricianRequests = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianRequests.js')))
const PediatricianApprovalDecision = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianApprovalDecision.js')))
const Pediatrician_full_article = Loadable(lazy(() => import('../../Actors/admin/pediatricians/ViewFullArticle')))


//this for add lazy loading astrologer component
const Astrologer = Loadable(lazy(() => import('../../Actors/admin/astrologers/Astrologers')));
const AstrologerReports = Loadable(lazy(() => import('../../Actors/admin/astrologers/AstrologerReports')));
const OneAstrologerReports = Loadable(lazy(() => import('../../Actors/admin/astrologers/OneAstrologerReport')));
const AstrologerRequests = Loadable(lazy(() => import('../../Actors/admin/astrologers/AstrologerRequests.js')))
const AstrologerApprovalDecision = Loadable(lazy(() => import('../../Actors/admin/astrologers/AstrologerApprovalDecision.js')))

//this for add lazy loading name provider component
const NameProvider = Loadable(lazy(() => import('../../Actors/admin/name-providers/NameProviders')));
const NameProviderReports = Loadable(lazy(() => import('../../Actors/admin/name-providers/NameProviderReports')));
const OneNameProviderReports = Loadable(lazy(() => import('../../Actors/admin/name-providers/OneNameProviderReport')));
const NameProviderRequests = Loadable(lazy(() => import('../../Actors/admin/name-providers/NameProviderRequests')))
const NameProviderApprovalDecision = Loadable(lazy(() => import('../../Actors/admin/name-providers/NameProviderApprovalDecision.js')))

//this for add lazy loading ecommerce component
const EcommerceProducts = Loadable(lazy(() => import('./ecommerce/EcommerceProduct')));
const EcommerceOrders = Loadable(lazy(() => import('./ecommerce/EcommerceOrders')));


const EcommerceReports = Loadable(lazy(() => import('./ecommerce/EcommerceReports')));

const AdminRoutes = [
    {path: '/ADMIN', element: <AdminDashboard/>, auth: authRoles.admin},
    {path: '/block', element: <Adminblock/>, auth: authRoles.admin},

    {path: '/admin/mothers', element: <MothersList/>, auth: authRoles.admin},
    {path: '/page' , element: <Loadingpage/>, auth: authRoles.admin},
    {path: '/admin/mothers_post_request', element: <MothersPostRequests/>, auth: authRoles.admin},
    {path: '/admin/mother_details/:id', element: <OneMothersDetails/>, auth: authRoles.admin},
    {path: '/admin/target_mothers_post_list/:id/:count', element: <TargetMothersPostList/>, auth: authRoles.admin},
    {path: '/admin/target_mothers_full_post_list/:uid/:pid', element: <MothersRequestList/>, auth: authRoles.admin},


    { path: '/admin/pediatricians', element: <PediatricianList />, auth: authRoles.admin },
    { path: '/admin/pediatrician_articles', element: <PediatricianArticles />, auth: authRoles.admin },
    { path: '/admin/pediatrician_request', element: <PediatricianRequests />, auth: authRoles.admin },
    { path: '/admin/pediatrician_full_article', element: <Pediatrician_full_article />, auth: authRoles.admin },
    { path: '/admin/PediatricianApprovalDecision/:id', element: <PediatricianApprovalDecision />, auth: authRoles.admin },

    { path: '/admin/astrologers', element: <Astrologer />, auth: authRoles.admin },
    { path: '/admin/astrologers_reports', element: <AstrologerReports />, auth: authRoles.admin },
    { path: '/admin/one_astrologer_report/:a_id', element: <OneAstrologerReport />, auth: authRoles.admin },
    { path: '/admin/astrologer_request', element: <AstrologerRequests />, auth: authRoles.admin },
    { path: '/admin/AstrologerApprovalDecision/:id', element: <AstrologerApprovalDecision />, auth: authRoles.admin },

    { path: '/admin/name_providers', element: <NameProvider />, auth: authRoles.admin },
    { path: '/admin/name_providers_reports', element: <NameProviderReports />, auth: authRoles.admin },
    { path: '/admin/one_name_provider_report', element: <OneNameProviderReport />, auth: authRoles.admin },
    { path: '/admin/name_provider_requests', element: <NameProviderRequests />, auth: authRoles.admin },
    { path: '/admin/NameProviderApprovalDecision/:id', element: <NameProviderApprovalDecision />, auth: authRoles.admin },

    { path: '/admin/ecommerce_products', element: <EcommerceProducts />, auth: authRoles.admin },
    { path: '/admin/ecommerce_orders', element: <EcommerceOrders />, auth: authRoles.admin },
    { path: '/admin/ecommerce_reports', element: <EcommerceReports />, auth: authRoles.admin },
];

export default AdminRoutes;
