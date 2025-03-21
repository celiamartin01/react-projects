import HeaderComponent from "../components/HeaderComponent"
import SideBarComponent from "../components/SideBarComponent"

function AllTasksPage() {
    return (
        <>
            <HeaderComponent />
            <SideBarComponent />

            <div className="main-content">
                <h1>All tasks</h1>
            </div>
        </>
    )
}

export default AllTasksPage