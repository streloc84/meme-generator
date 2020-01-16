import React,{Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this) 
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response=>{
            const{memes}=response.data
            this.setState({allMemeImgs:memes})
        })
    }
    handleChange(event){
        const{name,value}=event.target
        this.setState({
            [name]:value
        })

    }
render(){
    const topText=this.state.topText;
    const bottomText=this.state.bottomText;
    const randomImage=this.state.randomImage;
    console.log(this.state.allMemeImgs[0])
    
    return(
        <div>
        <input type="text" value={this.state.topText} placeholder="Top Text" name="topText"/>
        <input type="text" value={this.state.bottomText} placeholder="Bottom Text" name="bottomText"/>
        <h1>MEME GENERATOR SECTION</h1>
        <img src={randomImage}/>
        <div>{bottomText}</div>
        </div>
    )
}
}

export default MemeGenerator