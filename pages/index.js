import Header from "../components/header/header.component"
import React from "react"
import SearchBar from "../components/searchbar/searchbar.component"
import CourseList from "../components/courselist/courselist.component"
import Button from "../components/button/button.component"
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: ["Art and Illustrations", "Motion Design", "Fashion", "Logo and Brand", "Building Design", "Visual Design", "Web and App design", "Gaming", "Print Design"],
      searchField: "",
      selected: []
    }
  }


  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  handleClick = () => {
    const { selected } = this.state;
    if (selected.length < 2) {
      alert("Minimum 2 courses to be selected")
    }
    else {
      console.log(selected);
    }
  }

  updateSelected = (course, added) => {
    const { selected } = this.state
    if (!added) {
      selected.push(course)
      this.setState({ selected: selected });
    }
    else {
      const index = selected.indexOf(course);
      selected.splice(index, 1)
      this.setState({ selected: selected })
    }
  }
  render() {
    console.log("render called")
    const { courses, searchField } = this.state;
    const filteredCourses = courses.filter(course =>
      course.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <Header />
        <SearchBar type="text" placeholder="&#128269; Search" handleChange={this.handleChange} />
        <a className="ec-block ec-m-auto ec-my-4 ec-w-2/3 ec-font-semibold ec-text-lg sm:ec-text-xl lg:ec-text-2xl">Select at least two interests</a>
        <CourseList courses={filteredCourses} updateSelected={this.updateSelected} />
        <Button handleClick={this.handleClick}>Save</Button>

      </div>
    )
  }

}

export default Home
