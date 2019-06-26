import React from 'react'
import Typist from 'react-typist'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            command: false,
            projects: ""
        }
    }

    componentDidMount = async () => {
        const response = await fetch("http://about-me-api.herokuapp.com/project/all")
        const json = await response.json()
        this.setState({projects: json})
    }
    
    render() {

    const commandHandler = () => (
        this.setState({command: true})
    )
    
    console.log(this.state.projects)

    return (
        <div className="textContent">
            
            <div className="terminal-header">
            pedro@pedro-desktop:~$ 
            </div>
            <div className="terminal-text">
                <Typist 
                    cursor={{blink: true, element: '_', hideWhenDone:true}}
                    onTypingDone={commandHandler}>
                        ./show_my_projects.sh 
                </Typist>

                {this.state.command ? (
                <Typist startDelay={1000} stdTypingDelay={0} avgTypingDelay={1} cursor={{blink: false, show: false}}>

                <p className="open">{"{"}</p>

                {this.state.projects.map((project, index) => (
                    <p key={project.name} className="object">
                        {project.name}: {project.link}{this.state.projects.length - 1 === index ? "" : ","}
                    </p>
                ))}

                <p className="close">
                    {"}"}
                </p>
                </Typist>) : ("")}
                
            </div>
        </div>
        )
    }
}
export default Projects