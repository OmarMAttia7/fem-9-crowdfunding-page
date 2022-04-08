import React from "react";
import lazyLoadImage from "../common/lazyLoadImage";

class LazyImage extends React.Component<{src: string, alt?: string, className?: string}, {loaded: boolean, source: string}> {

  constructor(props: {src: string, alt?: string}){
    super(props);
    this.state = {
      loaded: false,
      source: ''
    }
  }

  componentDidMount(): void {

    if(!this.state.loaded){
      lazyLoadImage(this.props.src).then((uri) => {
        this.setState({loaded: true, source: uri});
      })
    }

  }

  render(){
    let image: JSX.Element;
    if(this.state.loaded){
      image = <img src={this.state.source} alt={this.props.alt} className={this.props.className}/>
    }else{
      image = <img alt={this.props.alt} />
    }
    return image;
  }
}

export default LazyImage;
