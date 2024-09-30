// CSS
import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';

// React Router Dom
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
// import HelpLayout from './layouts/TwoColumn_3_9_Layout';
// import BlogsLayout from './layouts/BlogsLayout';

/* 
    Pages Routes 
*/

// Home Page Start
import HomepageIndex from './pages/Index';
// Home Page End

// Project Pages Start
import ProjectsIndex from './pages/projects/Index';
import ProjectFilms from './pages/projects/ProjectFilms';
import ProjectsMap from './pages/projects/ProjectsMap';
import ProjectsList from './pages/projects/ProjectsList';
import ProjectCategoryDetail from './pages/projects/ProjectCategoryDetail';
import ProjectDetails from './pages/projects/projectDetails/ProjectDetails';

// Project Pages End

// Practice Pages Start
import PracticeIndex from './pages/practice/Index';
import History from './pages/practice/history/History';
import Mandate from './pages/practice/mandate/Mandate';
import Functions from './pages/practice/functions/Functions';
import MVV from './pages/practice/mvv/MVV';
import Management from './pages/practice/management/Management';
import SectorMinistry from './pages/practice/sector_ministry/SectorMinistry';
import CorporateGovernance from './pages/practice/corporate_governance/CorporateGovernance';
import Services from './pages/practice/services/Services';
import ClientSpeak from './pages/practice/client_speak/ClientSpeak';
import Alliances from './pages/practice/alliances/Alliances';
import CorporateResponsibilities from './pages/practice/corporate_responsibilities/CorporateResponsibilities';
// Practice Pages End

// Principles Pages Start
import PrinciplesIndex from './pages/principles/Index';
// Principles Pages End

// People Pages Start
import PeopleIndex from './pages/people/Index';
import PrincipalConsultants from './pages/people/principal_consultants/PrincipalConsultants';
import PrincipalConsultantDetails from './pages/people/principal_consultants/PrincipalConsultantDetails';
import Consultants from './pages/people/consultants/Consultants';
import ConsultantDetails from './pages/people/consultants/ConsultantDetails';
import SeniorConsultants from './pages/people/senior_consultants/SeniorConsultants';
import SeniorConsultantDetails from './pages/people/senior_consultants/SeniorConsultantDetails';
import SeniorProfessionals from './pages/people/senior_professionals/SeniorProfessionals';
import Professionals from './pages/people/Professionals';
import AssistantProfessionals from './pages/people/AssistantProfessionals';
import Probationers from './pages/people/Probationers';
import SupportTeam from './pages/people/SupportTeam';
import NationalServicePersonnel from './pages/people/NationalServicePersonnel';
// People Pages End

// News Pages Start
import NewsIndex from './pages/news/Index';
// News Pages End

// Publications Pages Start
import PublicationsIndex from './pages/publications/Index';
// Publications Pages End

// Page Not Found Start
import PageNotFound from './pages/miscPages/PageNotFound';
import BoardChairman from './pages/practice/corporate_governance/BoardChairman';
import BoardMember from './pages/practice/corporate_governance/BoardMember';
import ManagingDirectorDetails from './pages/practice/management/ManagingDirectorDetails';
import HODDetails from './pages/practice/management/HODDetails';
import DeputyManagingDirectorDetails from './pages/practice/management/DeputyManagingDirectorDetails';
// Page Not Found End

const myRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path = '/'
            element={<RootLayout />}
        > 
            <Route index
                element = {<HomepageIndex />}
            />
            <Route path = 'projects'
                element  = {
                    <ProjectsIndex />
                }
            />
            <Route path = 'projects'
            >
                <Route path = 'civic-and-culture'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'education'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'health'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'office-retail-and-mixed-use'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'sports-and-leisure'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'residential'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'industrial-and-infrastructure'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'hospitality'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'landscape-planning-and-survey'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'project-films'
                    element = {<ProjectFilms/>}
                />
                <Route path = 'projects-list'
                    element = {<ProjectsList/>}
                />
                <Route path = 'projects-map'
                    element = {<ProjectsMap/>}
                />
                <Route path = 'project-category-detail'
                    element = {<ProjectCategoryDetail/>}
                />
                <Route path = 'project-details'
                    element = {<ProjectDetails/>}
                />
            </Route>

            <Route path = 'practice'
                element = {<PracticeIndex />}
            />
            <Route path = 'practice'
            >
                <Route path = 'history'
                    element = {<History/>}
                />
                <Route path = 'mandate'
                    element = {<Mandate />}
                />
                <Route path = 'functions'
                    element = {<Functions />}
                />
                <Route path = 'mission-vision-and-values'
                    element = {<MVV />}
                />
                <Route path = 'sector-ministry'
                    element = {<SectorMinistry />}
                />
                <Route path = 'corporate-governance'
                    element = {<CorporateGovernance />}
                />
                <Route path = 'corporate-governance'
                >
                    <Route path = 'board-chairman'
                        element = {<BoardChairman />}
                    />
                    <Route path = 'board-members/:id'
                        element = {<BoardMember />}
                    />
                </Route>
                <Route path = 'management'
                    element = {<Management />}
                />
                <Route path = 'management'
                >
                    <Route path = 'managing-director'
                        element = {<ManagingDirectorDetails />}
                    />
                    <Route path = 'deputy-managing-director/:id'
                        element = {<DeputyManagingDirectorDetails />}
                    />
                    <Route path = 'head-of-department/:id'
                        element = {<HODDetails />}
                    />
                </Route>
                <Route path = 'services'
                    element = {<Services />}
                />
                <Route path = 'client-speak'
                    element = {<ClientSpeak />}
                />
                <Route path = 'alliances'
                    element = {<Alliances />}
                />
                <Route path = 'corporate-responsibilities'
                    element = {<CorporateResponsibilities />}
                />
            </Route>

            <Route path = 'people'
                element  = {
                    <PeopleIndex />
                }
            />
            <Route path = 'people'
            >
                <Route path = 'principal-consultants'
                    index
                    element = {<PrincipalConsultants />}
                />
                <Route path = 'principal-consultants/:id'
                    index
                    element = {<PrincipalConsultantDetails />}
                />
                <Route path = 'senior-consultants'
                    element = {<SeniorConsultants />}
                />
                <Route path = 'senior-consultants/:id'
                    element = {<SeniorConsultantDetails />}
                />
                <Route path = 'consultants'
                    element = {<Consultants />}
                />
                <Route path = 'consultants/:id'
                    element = {<ConsultantDetails />}
                />
                <Route path = 'senior-professionals'
                    element = {<SeniorProfessionals />}
                />
                <Route path = 'professionals'
                    element = {<Professionals />}
                />
                <Route path = 'assistant-professionals'
                    element = {<AssistantProfessionals />}
                />
                <Route path = 'probationers'
                    element = {<Probationers />}
                />
                <Route path = 'support-team'
                    element = {<SupportTeam />}
                />
                <Route path = 'service-personnel'
                    element = {<NationalServicePersonnel />}
                />
            </Route>
            
            <Route path = 'principles'
                element  = {
                    <PrinciplesIndex />
                }
            />
            <Route path = 'principles'
            >
                {/* <Route 
                    path = 'SDEL'
                    element = {<SDEL />}
                /> */}
                {/* <Route 
                    path = 'AEC'
                    element = {<AEC />}
                /> */}
            </Route>
            <Route path = 'news'
                element  = {
                    <NewsIndex />
                }
            />
            <Route path = 'news'
            >
                {/* <Route 
                    path = 'web-apps'
                    element = {<WebApps />}
                />
                <Route 
                    path = 'revit-consulting'
                    element = {<RevitConsulting/>}
                />
                <Route 
                    path = 'expert-training'
                    element = {<ExpertTraining />}
                /> */}
            </Route>
            <Route path = 'publications'
                element  = {<PublicationsIndex />}
            />
            <Route path = 'publications'
                
            >
                {/* <Route 
                    path = 'web-apps'
                    element = {<WebApps />}
                />
                <Route 
                    path = 'revit-consulting'
                    element = {<RevitConsulting/>}
                />
                <Route 
                    path = 'expert-training'
                    element = {<ExpertTraining />}
                /> */}
            </Route>

            <Route 
                path='*'
                element = { <PageNotFound /> }
            >
            </Route>
        </Route>
    )
)

function App() {

    return (
        <RouterProvider
            router = {myRouter}
        />
    );
};

export default App;



