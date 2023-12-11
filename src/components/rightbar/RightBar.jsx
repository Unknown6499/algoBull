import './RightBar.scss'
import {Card} from 'antd'


function RightBar() {
  return (
    <div className='rightBar'>
      <div className="container">
      <Card className='item'>
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
              <span>unknown kumar</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div></Card>
      </div>
      <div className="container">
    <Card className='item'>
          <span>Recent activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
              <span>Agyaat kumar changed their profile picture</span>
            </div>
          </div></Card>
        </div>
      <div className="container">
      <Card className='item'>
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">

              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
              <div className="online"/>
              <span>Random kumar</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">

              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
              <div className="online"/>
              <span>Another kumar</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">

              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
              <div className="online"/>
              <span>Alice</span>
            </div>
          </div>
          </Card>
        </div>
    </div>
  )
}

export default RightBar