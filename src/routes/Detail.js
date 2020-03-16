import React from "react";

class Detail extends React.Component{
    // Rendering 후 함수 실행
    componentDidMount(){
        const {location,history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const { location } =this.props;
        // 값이 있으면 title 보여주고 없으면 Null
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
    }
}
export default Detail;