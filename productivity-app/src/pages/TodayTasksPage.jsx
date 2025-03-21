import SideBarComponent from "../components/SideBarComponent"
import "../App.css"
import HeaderComponent from "../components/HeaderComponent"

function TodayTasksPage() {
  return (
    <>
      <HeaderComponent />
      <SideBarComponent />

      <div className="main-content">
        <h1>Tasks for today</h1>
      </div>
    </>
  )
}

export default TodayTasksPage