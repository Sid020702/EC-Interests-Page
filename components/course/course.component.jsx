import React from "react";
class Course extends React.Component {
    constructor() {
        super()
        this.state = {
            added: false
        }
    }



    handleClick = () => {
        const { updateSelected, course } = this.props
        const { added } = this.state
        this.setState({ added: !this.state.added });
        updateSelected(course, added)
    }

    render() {

        const defaultStyles = "ec-flex ec-cursor-pointer ec-p-3 ec-shadow-lg ec-shadow-gray ec-justify-between ec-items-center  ec-w-9/12 ec-my-5 ec-rounded-lg ec-font-semibold sm:ec-w-auto sm:justify-evenly  "
        const { course } = this.props;
        const { added } = this.state;
        const barStyles = " ec-h-[40px] ec-bg-blue-500 ec-w-[5px] ec-rounded-xl sm:ec-h-[60px]"
        return (
            <div className={`${defaultStyles} ${added ? "ec-bg-blue-500 ec-text-white" : ""}`} onClick={() => this.handleClick()}>
                <div className={`${barStyles} ${added ? "ec-bg-white" : ""}`}></div>
                <div className="ec-text-xl sm:ec-m-3 sm:ec-text-2xl lg:ec-text-3xl">
                    {course}
                </div>
                <div>
                    {
                        added ?
                            <span className="ec-font-bold ec-text-sm ec-text-white ec-mr-3 sm:ec-text-2xl">	&#10005;</span>
                            :
                            <span className="ec-font-semibold ec-text-2xl ec-mr-3 sm:ec-text-4xl">&#43;</span>

                    }
                </div>
            </div>
        )
    }

}

export default Course