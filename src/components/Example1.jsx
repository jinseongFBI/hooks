import React from 'react'; //리엑트 모듈을 가져다가 쓰기
//리액트.컴포넌트를 상속받아 example1의 클래스가 그것을 export 해준다

export default class Example1 extends React.Component{
  state={  //스테이스의 값은 count:0으로 설정
    count:0,
  };
  render(){
    const{count}=this.state //렌더할때 count 값은 자기자신state로 설정
    return(//p는 글씨 그리고 {count} 설정된값 
      //button 은 onClick을 했을때 자기자신의 click을 호출한다
      <div>
        <p>You clicked {count}times</p>
        <button onClick={this.click}>click me</button>
      </div>
    );
  }
  //click의 정의 화살표인자를 이용 하여 자기자신이 setstate 되었을때 값을 설정한다.
  click=()=>{
    this.setState({count:this.state.count+1});
  }
}